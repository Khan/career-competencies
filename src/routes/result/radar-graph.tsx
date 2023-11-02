import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";
import type { Skill } from "../../data";
import {
  Competencies,
  Expectations,
  calculateCompetencies,
  getLevel,
  Skills,
  getTrack,
} from "../../data";
import type { MouseEvent } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Radar, getElementAtEvent } from "react-chartjs-2";
import "./result.css";

export const RadarGraph = () => {
  const navigate = useNavigate();
  const data = useData();
  const chartRef = useRef(null);
  const track = data.user?.track ?? getTrack("core");

  // Hard coding this for now
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title,
  );

  const [competencyExpectations, overallExpectation] =
    calculateCompetencies(data);

  const levelMapping = getLevel(
    overallExpectation.value,
    competencyExpectations,
    track,
  );

  const promotionLabel = getLevel(
    overallExpectation.value + 1,
    competencyExpectations,
    track,
  );

  const radarDataPoints = competencyExpectations.map(([, e]) => e.value);
  const radarLabels = competencyExpectations.map(([c]) =>
    c.title.split(/(?<=^\S+)\s/),
  );

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      r: {
        grid: {
          color: "rgba(255, 255, 255, 0.87)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.87)",
        },
        gridLines: {
          color: "rgba(255, 255, 255, 0.87)",
        },
        min: 0,
        // We want either set the max scale to one level above the next promotion level
        // or to the highest competency level from the user data
        max: Math.max(overallExpectation.value + 2, ...radarDataPoints),
        ticks: {
          stepSize: 1,
          display: false,
        },
        pointLabels: {
          align: "center",
          color: "rgba(255, 255, 255, 0.87)",
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      title: {
        color: "rgba(255, 255, 255, 0.87)",
        text: "Competency Graph",
        display: true,
        padding: {
          top: 40,
          bottom: 20,
        },
        font: { size: 24 },
      },
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 16,
          },
        },
      },

      tooltip: {
        padding: 20,
        titleMarginBottom: 20,
        bodySpacing: 10,
        footerMarginTop: 20,
        boxPadding: 10,
        callbacks: {
          title: (tooltipItems: { label: string }[]) => {
            return `Skill: ` + tooltipItems[0].label;
          },
          label: (tooltipItem: {
            dataset?: { label?: string };
            formattedValue?: string;
          }) => {
            const { formattedValue } = tooltipItem;
            const label = tooltipItem?.dataset?.label;
            return `${label}: ${formattedValue}`;
          },
          footer: () => {
            return `Click on a datapoint to navigate to the skill`;
          },
        },
      },
    },
  };

  const radarData = {
    labels: radarLabels,
    datasets: [
      {
        label: "Current Competency Level",
        data: radarDataPoints,
        fill: true,
        backgroundColor: "rgba(100, 108, 255, 0.3)",
        borderColor: "rgba(100, 108, 255, 1)",
        borderWidth: 1,
      },
      {
        label: levelMapping + " Expectations",
        data: radarDataPoints.map(() => overallExpectation.value),
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "rgba(174, 214, 152, 1)",
        borderWidth: 4,
      },
      {
        label: promotionLabel + " Promotion Expectations",
        data: radarDataPoints.map(() => overallExpectation.value + 1),
        fill: true,
        backgroundColor: "rgba(255, 139, 34, 0)",
        borderColor: "rgba(255, 139, 34,  1)",
        borderWidth: 4,
      },
    ],
  };

  const onChartClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    const chartElement = getElementAtEvent(chart, event);

    // If we don't have a chart element, we don't have a skill to navigate to
    if (!chartElement || chartElement.length === 0) {
      return;
    }

    const { datasetIndex, index } = chartElement[0];
    const value = radarData.datasets[datasetIndex].data[index];
    const label = radarData.labels[index];

    const competencyKey = Competencies.find((c) => c.title === label.join(" "))
      ?.key;
    const expectation = value
      ? Expectations.find((e) => e.value === value)?.key
      : null;

    if (!competencyKey || !expectation) {
      return;
    }
    console.log(competencyKey, expectation);

    const skill = Object.values(Skills).find(
      (skill: Skill) =>
        skill.competency === competencyKey && skill.expectation === expectation,
    );

    if (!skill) {
      return;
    }
    const skillId = skill?.id as string;
    console.log(skillId);

    navigate(`/questionnaire/skill/${skillId}`);

    console.log(label, value);
  };

  return (
    <Radar
      data={radarData}
      ref={chartRef}
      onClick={onChartClick}
      options={options}
    />
  );
};
