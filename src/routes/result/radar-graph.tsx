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
import "./radar-graph.css";

const lightModeColors = {
  grid: "rgba(33, 53, 71, 0.3)",
  angleLines: "rgba(33, 53, 71, 0.3)",
  gridLines: "rgba(33, 53, 71, 0.3)",
  pointLabels: "rgba(33, 53, 71, 1)",
  title: "rgba(0, 0, 0, 0.87)",
  legend: "rgba(0, 0, 0, 0.5)",
  tooltip: "rgba(0, 0, 0, 0.95)",
};

const darkModeColors = {
  grid: "rgba(255, 255, 255, 0.75)",
  angleLines: "rgba(255, 255, 255, 0.75",
  gridLines: "rgba(255, 255, 255, 0.75)",
  pointLabels: "rgba(255, 255, 255, 0.87)",
  title: "rgba(255, 255, 255, 0.87)",
  legend: "rgba(255, 255, 255, 0.87)",
  tooltip: "rgba(0, 0, 0, 0.95)",
};

export const RadarGraph = () => {
  const navigate = useNavigate();
  const data = useData();
  const chartRef = useRef(null);
  const track = data.user?.track ?? getTrack("core");

  // Set up our light and dark mode colors
  const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
  const chartColors = lightMode ? lightModeColors : darkModeColors;

  // Register the chart elements and plugins
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

  // Get the label for the current competency level
  const levelMapping = getLevel(
    overallExpectation.value,
    competencyExpectations,
    track,
  );

  // Get the label for the next promotion level
  const promotionLabel = getLevel(
    overallExpectation.value + 1,
    competencyExpectations,
    track,
  );

  // Get the data points for the radar graph
  const radarDataPoints = competencyExpectations.map(([, e]) => e.value);
  const radarLabels = competencyExpectations.map(([c]) =>
    c.title.split(/(?<=^\S+)\s/),
  );

  // Set the options for the radar graph
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      r: {
        grid: {
          color: chartColors.grid,
        },
        angleLines: {
          color: chartColors.angleLines,
        },
        gridLines: {
          color: chartColors.gridLines,
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
          color: chartColors.pointLabels,
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      title: {
        color: chartColors.title,
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
        backgroundColor: chartColors.tooltip,
        boxPadding: 10,
        callbacks: {
          title: (tooltipItems: { label: string | string[] }[]) => {
            const hoveredItem = tooltipItems[0];
            const label: string = Array.isArray(hoveredItem.label)
              ? hoveredItem.label.join(" ")
              : hoveredItem.label;
            return `Skill: ` + label;
          },
          label: (tooltipItem: {
            dataset?: { label?: string };
            formattedValue?: string;
          }) => {
            const { formattedValue } = tooltipItem;
            const expectation = Expectations.find(
              (e) => e.value === Number(formattedValue),
            )?.title;

            const label = tooltipItem?.dataset?.label;
            return `${label}: ${expectation}`;
          },
          footer: () => {
            return `Click on a datapoint to navigate to the skill`;
          },
        },
      },
    },
  };

  // Set the data for the radar graph
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

  // When the radar graph is clicked, we want to navigate to the skill level
  const onChartClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    // Get the chart element that was clicked
    const chartElement = getElementAtEvent(chart, event);

    // If we don't have a chart element, we don't have a skill to navigate to
    if (!chartElement || chartElement.length === 0) {
      return;
    }

    // Get the dataset index and index of the clicked element
    const { datasetIndex, index } = chartElement[0];

    // We want to round up to the next odd number so that we can
    // send the user to the correct expectation level
    const valueWithPartials = radarData.datasets[datasetIndex].data[index];
    const value =
      valueWithPartials % 2 === 0 ? valueWithPartials + 1 : valueWithPartials;

    // Get the label for the clicked element which is an array of strings
    // in order to have the graph display the label as multiple lines
    const label = radarData.labels[index].join(" ");

    // Find the competency key and expectation key from the label and value
    const competencyKey = Competencies.find((c) => c.title === label)?.key;
    const expectation = value
      ? Expectations.find((e) => e.value === value)?.key
      : null;

    // If we don't have a competency key or expectation key, we can't
    // navigate to a skill
    if (!competencyKey || !expectation) {
      return;
    }

    // Find the skill that matches the competency key and expectation key
    const skill = Object.values(Skills).find(
      (skill: Skill) =>
        skill.competency === competencyKey && skill.expectation === expectation,
    );

    if (!skill) {
      return;
    }

    // Navigate to the skill
    const skillId = skill.id as string;
    navigate(`/questionnaire/skill/${skillId}`);
  };

  return (
    <div id="radar-graph">
      <Radar
        data={radarData}
        ref={chartRef}
        onClick={onChartClick}
        options={options}
      />
    </div>
  );
};
