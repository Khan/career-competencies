import type { Competencies, Expectation } from ".";
import type { UUID } from "./types";

export interface SkillSchema {
  competency: (typeof Competencies)[number]["key"];
  expectation: Expectation;
  id: UUID;
  description: string;
}

export const Skills = {
  // Delivering Results
  // Beginner
  "6a4d548a-4243-46b4-85e2-fffe85174be6": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "6a4d548a-4243-46b4-85e2-fffe85174be6",
    description:
      "You understand the scope of work before taking on tasks, with ability to communicate how this work could make a positive impact for our learners and/or organization.",
  },
  "db1ab02b-14e2-4fe4-be40-8d3e316aa6f6": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "db1ab02b-14e2-4fe4-be40-8d3e316aa6f6",
    description:
      "You take ownership of your work product, demonstrating a proactive approach to addressing issues and enhancing its potential impact.",
  },
  "de194914-9583-49dd-be95-c6de9875c4e1": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "de194914-9583-49dd-be95-c6de9875c4e1",
    description:
      "You collect and incorporate feedback to continuously improve your work and its outcomes.",
  },
  "4e7b45f0-10b3-458f-a524-f2deabefbdcf": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "4e7b45f0-10b3-458f-a524-f2deabefbdcf",
    description:
      "By adhering to your team's best practices, you ensure your work has the potential to be effective and impactful.",
  },
  "2690b50a-85fd-469c-bfbf-03d7f3f690ed": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "2690b50a-85fd-469c-bfbf-03d7f3f690ed",
    description:
      "As you participate in team planning, you're developing your ability to estimate work timelines that lead to impactful outcomes.",
  },
  // Intermediate
  "ee565102-899f-4025-93f7-c4b395be20f7": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "ee565102-899f-4025-93f7-c4b395be20f7",
    description:
      "Accurately estimating timelines for tasks, you commit to delivering impactful work at a steady, predictable pace.",
  },
  "4909753f-bbb1-4482-b9b6-a3e579b204ce": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "4909753f-bbb1-4482-b9b6-a3e579b204ce",
    description:
      "You use a variety of methods and tools to guarantee the quality of your work and to optimize its potential impact.",
  },
  "d9ce28dd-cdef-49a8-8059-3d527d303dce": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "d9ce28dd-cdef-49a8-8059-3d527d303dce",
    description:
      "With a balance of intuition and analysis, you consider diverse use cases, always with an eye towards maximizing impact.",
  },
  "27b702c4-88b8-4b87-a693-821725bc8eb0": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "27b702c4-88b8-4b87-a693-821725bc8eb0",
    description:
      "While delivering complete solutions, you communicate progress frequently, demonstrating the impact of your work.",
  },
  "123afcb4-d131-40d1-9ad9-8442498c4142": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "123afcb4-d131-40d1-9ad9-8442498c4142",
    description:
      "As a responsible steward of our shared resources, you consider the broader effects of your work on the team and organization.",
  },
  "cfa9fce6-af70-43ea-a2f2-1593b053f291": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "cfa9fce6-af70-43ea-a2f2-1593b053f291",
    description:
      "You identify important trade-offs and negotiate them, with the aim of making decisions that have a positive, broad-reaching impact.",
  },
  // Advanced
  "32217fe2-8b04-462b-8c23-d29d0673c65f": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "32217fe2-8b04-462b-8c23-d29d0673c65f",
    description:
      "You collaboratively outline work plans for large projects, providing reliable time, effort, and risk estimates. Your consistent ability to meet deadlines allows for consistent progress and measurable results.",
  },
  "23fba793-2e41-443a-b26c-a4c1c93daf63": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "23fba793-2e41-443a-b26c-a4c1c93daf63",
    description:
      "With effective communication, you keep all stakeholders informed about your plans, including when things don't go as expected, ensuring a shared understanding of the work's wider implications.",
  },
  "e59a4412-0260-41e6-b628-bbf421e2bdec": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "e59a4412-0260-41e6-b628-bbf421e2bdec",
    description:
      "You utilize a variety of methods to assess the quality of your work, committing to deliver outputs that not only meet expectations but also contribute positively to our goals.",
  },
  "9e560890-2e22-43d4-9241-dae098911ca5": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "9e560890-2e22-43d4-9241-dae098911ca5",
    description:
      "You proactively monitor the status of your work and related systems, preventing unforeseen issues and maintaining stable progress towards meaningful outcomes.",
  },
  "b50d75b8-9551-4e18-9a0e-05cbdd7a2fb4": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "b50d75b8-9551-4e18-9a0e-05cbdd7a2fb4",
    description:
      "You can see the big picture, understanding how multiple large-scale projects interact. Your proactive efforts to reduce overlap and friction lead to efficient processes and more significant results.",
  },
  "621f0aab-9024-4968-961c-155ce41e7024": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "621f0aab-9024-4968-961c-155ce41e7024",
    description:
      "You anticipate deviations from standard practices and find practical ways to move forward.",
  },
  // Expert
  "9d325d5a-ab15-49c8-b214-1e43de1eaf31": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "9d325d5a-ab15-49c8-b214-1e43de1eaf31",
    description:
      "You proactively consider the efforts of various teams and individuals, crafting comprehensive plans that align with organizational goals and deadlines, setting the stage for meaningful outcomes.",
  },
  "5ec917c4-3485-49bf-9533-dd4c7432fcbe": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "5ec917c4-3485-49bf-9533-dd4c7432fcbe",
    description:
      "Through a range of strategies, you secure the quality and longevity of systems and processes, thereby reinforcing our mission's enduring success.",
  },
  "f1c8a8dc-3738-4caf-9e2b-4091c4b35e6e": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "f1c8a8dc-3738-4caf-9e2b-4091c4b35e6e",
    description:
      "By maintaining an awareness of the broader organizational context, you minimize unforeseen roadblocks, ensuring projects advance smoothly towards success.",
  },
  "78320b8b-01f8-4cdb-921d-f9aeb31f2592": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "78320b8b-01f8-4cdb-921d-f9aeb31f2592",
    description:
      "You adapt your pace to the needs of the work, balancing efficiency and thoroughness in a way that respects our values and ultimately leads to remarkable results.",
  },
  "79672500-dbfa-42be-a170-2739a59821b0": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "79672500-dbfa-42be-a170-2739a59821b0",
    description:
      "You develop and implement insightful metrics that help teams better understand their work's value and potential, fostering a culture of informed decision-making for maximum effectiveness.",
  },
  // Leading Expert
  "c75edc33-4e86-45a7-ab2e-d922e6bdf03f": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "c75edc33-4e86-45a7-ab2e-d922e6bdf03f",
    description:
      "You help all of Khan Academy get unstuck, finding ways to make the company more effective at delivering impact. ",
  },
  "da278638-ed8d-495d-826e-d86fca229f3c": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "da278638-ed8d-495d-826e-d86fca229f3c",
    description:
      "You create and develop solutions that set industry standards, thereby significantly enhancing our organizational impact.",
  },
  "421f9532-a70e-4ee0-9c45-f278c8f2c9b3": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "421f9532-a70e-4ee0-9c45-f278c8f2c9b3",
    description:
      "By focusing on the most important goals of Khan Academy, you contribute in a way that exceeds the immediate challenges and leads to meaningful, far-reaching results in our goals and KPIs.",
  },
  "0b6368f7-5a21-4658-9168-cab781dba853": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "0b6368f7-5a21-4658-9168-cab781dba853",
    description:
      "You craft systems that operate efficiently, without a need for your involvement, throughout Khan Academy and beyond.",
  },

  // Domain Expertise
  // Beginner
  "d326c7b7-3385-44c5-9fac-c22ac57ef843": {
    competency: "domainExpertise",
    expectation: "beginner",
    id: "d326c7b7-3385-44c5-9fac-c22ac57ef843",
    description: "You ask questions to support your own continuous learning.",
  },
  "e7bdfea1-a9e2-46aa-8c2e-d64abf9ef542": {
    competency: "domainExpertise",
    expectation: "beginner",
    id: "e7bdfea1-a9e2-46aa-8c2e-d64abf9ef542",
    description: "You learn from your own research and from those around you.",
  },
  "4a66cc62-3d84-4b19-b531-79b8cd7d7603": {
    competency: "domainExpertise",
    expectation: "beginner",
    id: "4a66cc62-3d84-4b19-b531-79b8cd7d7603",
    description: "You seize opportunities to increase your knowledge.",
  },
  // Intermediate
  "19806530-1c93-4bc9-a07a-2f3d5ee13eca": {
    competency: "domainExpertise",
    expectation: "intermediate",
    id: "19806530-1c93-4bc9-a07a-2f3d5ee13eca",
    description:
      "You understand the concepts necessary to do your job effectively and are aware of industry trends in your domain.",
  },
  "5f98d654-2cad-4cfc-9095-c97c05b6c018": {
    competency: "domainExpertise",
    expectation: "intermediate",
    id: "5f98d654-2cad-4cfc-9095-c97c05b6c018",
    description:
      "You have a good sense of where to find answers and are able to grow your own knowledge both with and without guidance.",
  },
  "62c7a073-5422-435e-9d58-7680e0a318b1": {
    competency: "domainExpertise",
    expectation: "intermediate",
    id: "62c7a073-5422-435e-9d58-7680e0a318b1",
    description:
      "You're comfortable using the tools & systems relevant to your domain in a productive manner.",
  },
  "9609fb37-7c5d-4e41-9021-b6ba0c31a5f0": {
    competency: "domainExpertise",
    expectation: "intermediate",
    id: "9609fb37-7c5d-4e41-9021-b6ba0c31a5f0",
    description:
      "You have in-depth knowledge of your primary work processes and some knowledge of adjacent processes.",
  },
  "c41ea295-5813-4d80-8799-bcbc917d8991": {
    competency: "domainExpertise",
    expectation: "intermediate",
    id: "c41ea295-5813-4d80-8799-bcbc917d8991",
    description:
      "You understand why your work is important and how it relates to the team and organizational goals.",
  },
  // Advanced
  "05efbede-7edd-462c-9187-693dd66daf26": {
    competency: "domainExpertise",
    expectation: "advanced",
    id: "05efbede-7edd-462c-9187-693dd66daf26",
    description:
      "You use your specialized knowledge and business acumen to ensure that projects succeed.",
  },
  "2d9714e0-7c6e-4bf7-9c3f-d6667e873468": {
    competency: "domainExpertise",
    expectation: "advanced",
    id: "2d9714e0-7c6e-4bf7-9c3f-d6667e873468",
    description:
      "You know what tools and systems are available and useful for your domain. You understand how they work, and the sorts of situations and problems for which they're useful. You use them effectively and teach them to your teammates.",
  },
  "a0684cf9-6ff9-4d98-9acb-9d9365920323": {
    competency: "domainExpertise",
    expectation: "advanced",
    id: "a0684cf9-6ff9-4d98-9acb-9d9365920323",
    description:
      "You have strong, well-founded opinions about how to manage responsibilities in your domain, but you're adaptable and open to new ideas.",
  },
  "3a9d28f3-bf33-4a3a-a944-59cb932e43d9": {
    competency: "domainExpertise",
    expectation: "advanced",
    id: "3a9d28f3-bf33-4a3a-a944-59cb932e43d9",
    description:
      "You closely follow industry trends relevant to your domain and understand how to apply them to your work as appropriate.",
  },
  "31f9c40b-5065-4dcf-90d9-a1fe57374cdc": {
    competency: "domainExpertise",
    expectation: "advanced",
    id: "31f9c40b-5065-4dcf-90d9-a1fe57374cdc",
    description:
      "You share your knowledge with your coworkers. You're able to explain topics about which you know a great deal to those who know less in a way that is understandable and not condescending.",
  },
  // Expert
  "c2fca453-9b4c-4708-9efe-639c2bddc48c": {
    competency: "domainExpertise",
    expectation: "expert",
    id: "c2fca453-9b4c-4708-9efe-639c2bddc48c",
    description:
      "You use your expertise to improve Khan Academy's capabilities in your domain.",
  },
  "20ef1d49-ce74-463d-b605-def03eaaa0c1": {
    competency: "domainExpertise",
    expectation: "expert",
    id: "20ef1d49-ce74-463d-b605-def03eaaa0c1",
    description:
      "You actively share your knowledge and seek opportunities to teach others about your domain.",
  },
  "211f8653-47df-4f95-8f16-37df7bb8c036": {
    competency: "domainExpertise",
    expectation: "expert",
    id: "211f8653-47df-4f95-8f16-37df7bb8c036",
    description:
      "You thoughtfully and practically introduce innovative concepts and best practices from the industry to solve important problems.",
  },
  "70ec5382-01ef-4474-97f7-72446e8b0131": {
    competency: "domainExpertise",
    expectation: "expert",
    id: "70ec5382-01ef-4474-97f7-72446e8b0131",
    description:
      "Work you have done or that is based on your expertise has consistently been successful. Your expertise helps projects and teams achieve and exceed their goals.",
  },
  // Leading Expert
  "49ec3d97-bd66-4a47-bed9-df521331e774": {
    competency: "domainExpertise",
    expectation: "leading expert",
    id: "49ec3d97-bd66-4a47-bed9-df521331e774",
    description:
      "Your contributions to the field (e.g. talks, open source projects, research papers) have meaningful impact beyond Khan Academy.",
  },
  "8889b829-f8ef-430b-90c5-eed068081e70": {
    competency: "domainExpertise",
    expectation: "leading expert",
    id: "8889b829-f8ef-430b-90c5-eed068081e70",
    description:
      "Your expertise helps Khan Academy exceed its KPIs and organization priorities.",
  },
  "2f6d04ec-6155-4aac-86fe-d3d3ace19c3e": {
    competency: "domainExpertise",
    expectation: "leading expert",
    id: "2f6d04ec-6155-4aac-86fe-d3d3ace19c3e",
    description:
      "You use your expertise to come up with solutions to long-standing or seemingly intractable problems in the broader industry.",
  },
  "ef2b3abc-05aa-4583-9723-51b54eeae206": {
    competency: "domainExpertise",
    expectation: "leading expert",
    id: "ef2b3abc-05aa-4583-9723-51b54eeae206",
    description:
      "You contribute to the advancement of the wider industry in your domain.",
  },

  // Problem Solving
  // Beginner
  "6d8bb4c2-4bbc-4212-9d52-b47cc178fb72": {
    competency: "problemSolving",
    expectation: "beginner",
    id: "6d8bb4c2-4bbc-4212-9d52-b47cc178fb72",
    description:
      "You're able to solve routine problems easily; sometimes, you can solve unfamiliar challenges with focused effort.",
  },
  "d1be6442-b158-4feb-af8f-24bc969c4758": {
    competency: "problemSolving",
    expectation: "beginner",
    id: "d1be6442-b158-4feb-af8f-24bc969c4758",
    description:
      "You recognize when you don't yet have the experience or knowledge to solve a problem and reach out to others for help or guidance.",
  },
  "49a162cf-5823-4fae-9ca6-37ab750a21c6": {
    competency: "problemSolving",
    expectation: "beginner",
    id: "49a162cf-5823-4fae-9ca6-37ab750a21c6",
    description:
      "You are beginning to understand which tools and systems are relevant to your work and how to use them.",
  },
  "6eb9984c-cc1c-45ff-835a-7f3b9319711b": {
    competency: "problemSolving",
    expectation: "beginner",
    id: "6eb9984c-cc1c-45ff-835a-7f3b9319711b",
    description:
      "You prepare to work on new tasks by planning an approach ahead of time and confirming it's well thought out.",
  },
  "0d09c379-6106-47eb-b400-d2f14ae858c0": {
    competency: "problemSolving",
    expectation: "beginner",
    id: "0d09c379-6106-47eb-b400-d2f14ae858c0",
    description:
      "You approach each new task as an opportunity to learn and continually apply what you've learned to each new challenge.",
  },
  // Intermediate
  "0d7a342a-faed-43ba-bd33-bc47980b3297": {
    competency: "problemSolving",
    expectation: "intermediate",
    id: "0d7a342a-faed-43ba-bd33-bc47980b3297",
    description:
      "You utilize data, strategy documents / roadmaps, research, and relevant functional principles to inform the decisions you make, assuring your solutions are built for the long term.",
  },
  "b5950b89-486c-4f8d-a3ac-1a8a3ce661c4": {
    competency: "problemSolving",
    expectation: "intermediate",
    id: "b5950b89-486c-4f8d-a3ac-1a8a3ce661c4",
    description:
      "You optimize your workflow by recognizing and solving repetitive problems rather than working around them.",
  },
  "df6c045f-03e5-4bd6-a860-f643745dc00e": {
    competency: "problemSolving",
    expectation: "intermediate",
    id: "df6c045f-03e5-4bd6-a860-f643745dc00e",
    description:
      "You recognize your own mistakes, use them as a learning and teaching opportunity, and adjust your approach to minimize the risk of repeating the same type of mistake.",
  },
  "78080de1-5618-4158-a4f3-b78f68828583": {
    competency: "problemSolving",
    expectation: "intermediate",
    id: "78080de1-5618-4158-a4f3-b78f68828583",
    description:
      "You utilize new technologies, patterns, and the domain expertise of your peers to supplement your own skills.",
  },
  "12ac4ea1-71af-434b-8e9b-1987103a4e6b": {
    competency: "problemSolving",
    expectation: "intermediate",
    id: "12ac4ea1-71af-434b-8e9b-1987103a4e6b",
    description:
      "You are learning to break down large problems into smaller, more manageable ones.",
  },
  "47da3b4e-68ca-451e-9444-a36383330e42": {
    competency: "problemSolving",
    expectation: "intermediate",
    id: "47da3b4e-68ca-451e-9444-a36383330e42",
    description:
      "You have strong root cause analysis skills, allowing you to determine source of issues in unfamiliar settings.",
  },
  // Advanced
  "c71b0b14-a74c-43c4-bf23-c0824f660b47": {
    competency: "problemSolving",
    expectation: "advanced",
    id: "c71b0b14-a74c-43c4-bf23-c0824f660b47",
    description:
      "You are guided by your experience to identify and solve issues with ease even when they are not in your domain.",
  },
  "16cc7cc1-a3e9-4d2a-bc4a-5211e844736a": {
    competency: "problemSolving",
    expectation: "advanced",
    id: "16cc7cc1-a3e9-4d2a-bc4a-5211e844736a",
    description:
      "Your detailed planning has enabled you to identify & mitigate risks early on and has proven to reduce poor outcomes.",
  },
  "a59a3f7e-a7d5-4177-b5f7-aa412b9f7665": {
    competency: "problemSolving",
    expectation: "advanced",
    id: "a59a3f7e-a7d5-4177-b5f7-aa412b9f7665",
    description:
      "You utilize data and proofs of concept to find creative solutions to difficult problems.",
  },
  "dcda1c0c-62a5-4083-b0dc-b5366c50f6fa": {
    competency: "problemSolving",
    expectation: "advanced",
    id: "dcda1c0c-62a5-4083-b0dc-b5366c50f6fa",
    description:
      "You reflect on solutions you have created, measure their impact, and use that information to ideate and optimize future work.",
  },
  "77446773-aab8-46b5-8508-cbd429ae827b": {
    competency: "problemSolving",
    expectation: "advanced",
    id: "77446773-aab8-46b5-8508-cbd429ae827b",
    description:
      "You break down complex problems into smaller, more manageable ones, and help others to do the same",
  },
  "becad788-5fa4-46b0-b0de-da82b1f3bc51": {
    competency: "problemSolving",
    expectation: "advanced",
    id: "becad788-5fa4-46b0-b0de-da82b1f3bc51",
    description:
      "You are adept at making decisions that involve a significant number of factors and have broad implications.",
  },
  // Expert
  "0357aa79-01b0-4834-80b4-a6cb28ab38f9": {
    competency: "problemSolving",
    expectation: "expert",
    id: "0357aa79-01b0-4834-80b4-a6cb28ab38f9",
    description:
      "You solve pressing issues in areas outside your field of expertise and are capable of providing useful on-call support across a broad range of issues.",
  },
  "e6453a9a-1be9-4214-9b4e-73ea85b898ac": {
    competency: "problemSolving",
    expectation: "expert",
    id: "e6453a9a-1be9-4214-9b4e-73ea85b898ac",
    description:
      "Your solutions are consistently successful across multiple dimensions, including performance, scalability, robustness and maintainability.",
  },
  "11e12164-b1c1-4152-b17d-d3ebf95cb950": {
    competency: "problemSolving",
    expectation: "expert",
    id: "11e12164-b1c1-4152-b17d-d3ebf95cb950",
    description:
      "You create solutions that do not rely on you personally, and are particularly robust against single points of failure, both in terms of systems and people.",
  },
  "36a82883-8066-484c-8784-5b7318afb5a4": {
    competency: "problemSolving",
    expectation: "expert",
    id: "36a82883-8066-484c-8784-5b7318afb5a4",
    description:
      "Your proposals are informed by industry best practices and you are able to develop enough domain expertise in the problem space to understand tradeoffs at a sufficiently deep level.",
  },
  "c6852da5-1de1-46f7-8458-701f1f9ff5c8": {
    competency: "problemSolving",
    expectation: "expert",
    id: "c6852da5-1de1-46f7-8458-701f1f9ff5c8",
    description:
      "You are able to look ahead 6-12 months to identify areas of greatest need for the function or a particular project, and turn this into a roadmap with actionable milestones.",
  },
  // Leading Expert
  "3c645519-d852-49b9-bbf4-2da68d30edf1": {
    competency: "problemSolving",
    expectation: "leading expert",
    id: "3c645519-d852-49b9-bbf4-2da68d30edf1",
    description:
      "You create solutions that get near-unanimous acceptance and adoption from critical stakeholders, and which provide continual benefit with little support or overhead for a very long lifespan.",
  },
  "16a921d7-65d8-4740-a84e-a9e4ccceed63": {
    competency: "problemSolving",
    expectation: "leading expert",
    id: "16a921d7-65d8-4740-a84e-a9e4ccceed63",
    description:
      "You identify barriers that are slowing down teams and initiatives at Khan Academy and create practical solutions to increase efficiency.",
  },
  "4cdf67e6-394a-4d08-95f3-ccd35407e7be": {
    competency: "problemSolving",
    expectation: "leading expert",
    id: "4cdf67e6-394a-4d08-95f3-ccd35407e7be",
    description:
      "You are a leader who provides actionable direction to teams in the face of complex problems involving multiple stakeholders.",
  },
  "0a5df981-c5ef-452e-8468-a426e2abaee1": {
    competency: "problemSolving",
    expectation: "leading expert",
    id: "0a5df981-c5ef-452e-8468-a426e2abaee1",
    description: "You create new solutions that solve industry-wide problems.",
  },

  // Communication
  // Beginner
  "246582ed-df3d-4ce4-9518-4413a74489bb": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "246582ed-df3d-4ce4-9518-4413a74489bb",
    description:
      "You articulate questions clearly and show an eagerness to learn and engage with your team.",
  },
  "577494db-ec22-4991-a82d-a548fc005ee1": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "577494db-ec22-4991-a82d-a548fc005ee1",
    description:
      "You understand and follow Khan Academy's guide for using inclusive language and take initial steps in engaging in productive dialogues.",
  },
  "6870e359-f417-409b-98e4-61d4dae1ccd1": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "6870e359-f417-409b-98e4-61d4dae1ccd1",
    description:
      "You know when to keep digging vs. when to ask for help and actively engage others when you need assistance.",
  },
  "fcac9e47-e284-4aaf-b7d5-02cf815bd885": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "fcac9e47-e284-4aaf-b7d5-02cf815bd885",
    description:
      "When you learn something new, or solve a problem, you develop a habit of documentation that engages others in the learning process.",
  },
  "d576de61-b103-4f83-b75c-239678be8315": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "d576de61-b103-4f83-b75c-239678be8315",
    description:
      "When you learn something new, or solve a problem, you develop a habit of documentation that engages others in the learning process.",
  },
  "eece8e6b-532c-4732-b47d-2c9e7cb9f07b": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "eece8e6b-532c-4732-b47d-2c9e7cb9f07b",
    description:
      "You align your actions with your words and hold yourself accountable.",
  },
  // Intermediate
  "0a27b816-7463-4a2f-9f75-dd8825d255cc": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "0a27b816-7463-4a2f-9f75-dd8825d255cc",
    description:
      "You regularly create clear, engaging documentation related to your work.",
  },
  "5aef9121-61d7-4086-a116-0ecc9c8abfc9": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "5aef9121-61d7-4086-a116-0ecc9c8abfc9",
    description:
      "You can decipher vague requirements and engage in clarifying dialogues by asking the right questions.",
  },
  "4f72bdbc-ba9f-44e5-a399-078f58b7a759": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "4f72bdbc-ba9f-44e5-a399-078f58b7a759",
    description:
      "You are proficient in offering and engaging in constructive feedback discussions.",
  },
  "c28f9f94-212f-4d8b-92eb-0e66fea823e0": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "c28f9f94-212f-4d8b-92eb-0e66fea823e0",
    description:
      "You give and receive constructive feedback with clarity, empathy, and active engagement.",
  },
  "2e64ae86-68d4-41aa-9560-ff73e7918c62": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "2e64ae86-68d4-41aa-9560-ff73e7918c62",
    description:
      "You listen when others are speaking and make space for your colleagues to share their thoughts.",
  },
  // Advanced
  "d31cbc52-dfbb-4cf4-9274-2610f392805c": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "d31cbc52-dfbb-4cf4-9274-2610f392805c",
    description:
      "Your communication and documentation engages the right people in larger initiatives and projects.",
  },
  "b7199446-3f1d-42e0-962e-9292692fa35a": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "b7199446-3f1d-42e0-962e-9292692fa35a",
    description:
      "Your ability to identify core issues from discussions and meetings makes these gatherings more productive and engaging.",
  },
  "e91bd070-0d1b-43ac-b58a-c8f2ad7ce64d": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "e91bd070-0d1b-43ac-b58a-c8f2ad7ce64d",
    description:
      "You explain concepts clearly and with patience, and adjust your communication based on the audience. You offer help when asked, but you also know when to step back and let others work things out on their own.",
  },
  "033e0ccc-1f86-47e6-9e62-0b81c4bd6c6e": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "033e0ccc-1f86-47e6-9e62-0b81c4bd6c6e",
    description:
      "You explain concepts clearly and with patience, and adjust your communication based on the audience. You offer help when asked, but you also know when to step back and let others work things out on their own.",
  },
  "1f5be919-1ff7-467d-89a6-7075d10f80da": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "1f5be919-1ff7-467d-89a6-7075d10f80da",
    description:
      "You are an attentive and empathetic listener, ensuring that everyone you're working with feels heard and engaged.",
  },
  // Expert
  "768df194-ca7d-4f01-a438-e2e6d5bcfc12": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "768df194-ca7d-4f01-a438-e2e6d5bcfc12",
    description:
      "You take responsibility for comprehensive documentation of large projects and processes, coordinating with others to ensure engaging and useful documentation is produced.",
  },
  "3c0e5a2b-cc34-47cf-a022-6073c7b98107": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "3c0e5a2b-cc34-47cf-a022-6073c7b98107",
    description:
      "Your facilitation skills keep conversations productive, respectful, and engaging, helping disparate groups identify common goals and reach consensus.",
  },
  "3acfaee0-5dbf-4848-bf8a-a65a97c2b843": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "3acfaee0-5dbf-4848-bf8a-a65a97c2b843",
    description:
      "Others often turn to you to make and communicate difficult decisions.",
  },
  "cee79a9e-0c06-469e-a893-2bc11634c16f": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "cee79a9e-0c06-469e-a893-2bc11634c16f",
    description:
      "You draw consensus by adapting your language to meet the needs of various audiences, creating an approachable and engaging learning environment for others.",
  },
  "7aa7f868-ab76-489e-8037-7733ed1fd768": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "7aa7f868-ab76-489e-8037-7733ed1fd768",
    description:
      "You not only practice mindful communication and active listening in your interactions, but also encourage and facilitate these practices in others, fostering an overall culture of engagement.",
  },
  // Leading Expert
  "38287017-82cc-45f0-a357-334306f9fafb": {
    competency: "communicationAndEngagement",
    expectation: "leading expert",
    id: "38287017-82cc-45f0-a357-334306f9fafb",
    description:
      "You've made significant changes to how Khan Academy handles documentation, facilitation, or collaboration that has improved the functioning of the entire organization.",
  },
  "324f76b9-4926-484e-9682-d0739612e048": {
    competency: "communicationAndEngagement",
    expectation: "leading expert",
    id: "324f76b9-4926-484e-9682-d0739612e048",
    description:
      "You create spaces and channels that improve cross-team and inter-departmental communication at Khan Academy.",
  },
  "a677a230-6dbf-4be6-be1b-b68f89f34ca0": {
    competency: "communicationAndEngagement",
    expectation: "leading expert",
    id: "a677a230-6dbf-4be6-be1b-b68f89f34ca0",
    description:
      "Others turn to you for advice on delivering difficult feedback and communicating effectively, recognizing your expertise in engaging communication.",
  },
  "8c33e863-2949-41eb-9819-deba3c683bf2": {
    competency: "communicationAndEngagement",
    expectation: "leading expert",
    id: "8c33e863-2949-41eb-9819-deba3c683bf2",
    description:
      "Your presence and example has a strong, positive influence on Khan Academy's working environment.",
  },

  // Leadership
  // Beginner
  "3a3eadd2-3f50-48e5-b4ff-0b6c97148e67": {
    competency: "leadership",
    expectation: "beginner",
    id: "3a3eadd2-3f50-48e5-b4ff-0b6c97148e67",
    description:
      "You are open to direction and keen to learn about valuable leadership traits.",
  },
  "0b9021f8-700f-40d2-ac61-0b9057a5ad88": {
    competency: "leadership",
    expectation: "beginner",
    id: "0b9021f8-700f-40d2-ac61-0b9057a5ad88",
    description:
      "You transparently communicate areas of uncertainty and seek guidance when needed.",
  },
  "9dc2764d-2b55-44e1-844d-af7195e92c61": {
    competency: "leadership",
    expectation: "beginner",
    id: "9dc2764d-2b55-44e1-844d-af7195e92c61",
    description:
      "You regularly seek feedback, demonstrating commitment to personal growth and improvement.",
  },
  // Intermediate
  "bdab95f6-ecf5-4613-b519-fb9d08d8671f": {
    competency: "leadership",
    expectation: "intermediate",
    id: "bdab95f6-ecf5-4613-b519-fb9d08d8671f",
    description:
      "You proactively identify challenges and propose potential solutions, showing initiative.",
  },
  "b9082a49-f0ed-4087-af97-0a9e365b65e1": {
    competency: "leadership",
    expectation: "intermediate",
    id: "b9082a49-f0ed-4087-af97-0a9e365b65e1",
    description:
      "You demonstrate self-motivation in tackling your team's projects and achieving results.",
  },
  "1e76d8ae-a5f2-40f1-b41e-13ee3ee350ae": {
    competency: "leadership",
    expectation: "intermediate",
    id: "1e76d8ae-a5f2-40f1-b41e-13ee3ee350ae",
    description:
      "You consistently seek out feedback and take actionable steps based on the input received.",
  },
  "8f8fb998-1501-4440-b79a-5a18f09d2aac": {
    competency: "leadership",
    expectation: "intermediate",
    id: "8f8fb998-1501-4440-b79a-5a18f09d2aac",
    description:
      "You help foster an environment conducive for others to learn, grow, and thrive.",
  },
  "c160dd0e-4b5d-4fea-ab0a-af5349066790": {
    competency: "leadership",
    expectation: "intermediate",
    id: "c160dd0e-4b5d-4fea-ab0a-af5349066790",
    description:
      "You step up for small leadership opportunities, like mentoring or leading a working group, showing your growing leadership capabilities.",
  },
  // Advanced
  "fd9ac750-71b5-4413-9b2b-ac1b14d1b355": {
    competency: "leadership",
    expectation: "advanced",
    id: "fd9ac750-71b5-4413-9b2b-ac1b14d1b355",
    description:
      "You are ready to step in and take ownership when there are problems without clear resolution, showing your accountability.",
  },
  "3e96b453-a395-4b6b-b8a7-2cad2c681a42": {
    competency: "leadership",
    expectation: "advanced",
    id: "3e96b453-a395-4b6b-b8a7-2cad2c681a42",
    description:
      "You inspire and motivate others towards achieving team objectives.",
  },
  "a3dc0fb2-8fae-447d-8366-2865f2621aba": {
    competency: "leadership",
    expectation: "advanced",
    id: "a3dc0fb2-8fae-447d-8366-2865f2621aba",
    description:
      "You cultivate an environment that invites questions and encourages learning.",
  },
  "cf3e1ee9-b8de-4c77-a3f6-bb937571dae8": {
    competency: "leadership",
    expectation: "advanced",
    id: "cf3e1ee9-b8de-4c77-a3f6-bb937571dae8",
    description:
      "You make decisive and effective decisions that contribute to the overall business strategy.",
  },
  "1194b7e0-feb3-4cca-8150-58d12691de58": {
    competency: "leadership",
    expectation: "advanced",
    id: "1194b7e0-feb3-4cca-8150-58d12691de58",
    description:
      "You convert ideas and opportunities into actionable projects for team members, facilitating cross-functional collaboration.",
  },
  "e08e5393-b9b6-49cf-882c-634e70fc2ecf": {
    competency: "leadership",
    expectation: "advanced",
    id: "e08e5393-b9b6-49cf-882c-634e70fc2ecf",
    description:
      "You frequently take on roles involving direct leadership, such as coordinating long-term projects or initiatives.",
  },
  // Expert
  "d6a9aec7-4c16-4815-9ccd-ef9fc72a930d": {
    competency: "leadership",
    expectation: "expert",
    id: "d6a9aec7-4c16-4815-9ccd-ef9fc72a930d",
    description:
      "You have successfully driven change within your department to address crucial needs, leading with vision and strategy.",
  },
  "5c984812-6169-4b03-ae8b-5f2102b7a2f7": {
    competency: "leadership",
    expectation: "expert",
    id: "5c984812-6169-4b03-ae8b-5f2102b7a2f7",
    description:
      "You leverage your extensive internal network and collaborate with other leaders to resolve complex issues.",
  },
  "26a0e796-c06e-45ec-94e8-71f2f0e03d4e": {
    competency: "leadership",
    expectation: "expert",
    id: "26a0e796-c06e-45ec-94e8-71f2f0e03d4e",
    description:
      "You take on critical challenges, showing your accountability for the organization's success.",
  },
  "8e977450-db6d-4909-8e69-b467891e35aa": {
    competency: "leadership",
    expectation: "expert",
    id: "8e977450-db6d-4909-8e69-b467891e35aa",
    description:
      "You contribute to your department's improvement by sharing knowledge and creating opportunities for others.",
  },
  "29fe73b3-046b-45f9-9ad0-02fa8e057444": {
    competency: "leadership",
    expectation: "expert",
    id: "29fe73b3-046b-45f9-9ad0-02fa8e057444",
    description:
      "You consistently make hard decisions in the face of uncertainty, demonstrating resilience and determination.",
  },
  // Leading Expert
  "ff91ea5e-756b-4a10-968e-c1d1a04887c4": {
    competency: "leadership",
    expectation: "leading expert",
    id: "ff91ea5e-756b-4a10-968e-c1d1a04887c4",
    description:
      "You have successfully changed how your department functions in a way that has moved both Khan Academy forward and established a best practice in the industry.",
  },
  "d231788f-6efd-4145-8f43-140624a6b083": {
    competency: "leadership",
    expectation: "leading expert",
    id: "d231788f-6efd-4145-8f43-140624a6b083",
    description:
      "You are accountable for the success of your department with respect to attracting top talent and ensuring the strength of our brand.",
  },
  "c484d51d-622c-41fe-972d-83e77ec7b24b": {
    competency: "leadership",
    expectation: "leading expert",
    id: "c484d51d-622c-41fe-972d-83e77ec7b24b",
    description:
      "You regularly represent Khan Academy publicly (e.g. via blog posts, speaking, etc.).",
  },
  "02f42e0c-93d8-4db2-be10-d938268b7f14": {
    competency: "leadership",
    expectation: "leading expert",
    id: "02f42e0c-93d8-4db2-be10-d938268b7f14",
    description:
      "Your leadership is cited by many on the team as a significantly positive aspect of working at Khan Academy.",
  },

  // Inclusive Collaboration
  // Beginner
  "632354f4-9f93-4d08-b570-420d03a0d3f6": {
    competency: "inclusiveCollaboration",
    expectation: "beginner",
    id: "632354f4-9f93-4d08-b570-420d03a0d3f6",
    description:
      "You demonstrate self-awareness of personal biases and acknowledges different work styles.",
  },
  "2452aa70-bc38-4bae-8177-1c39735670b9": {
    competency: "inclusiveCollaboration",
    expectation: "beginner",
    id: "2452aa70-bc38-4bae-8177-1c39735670b9",
    description:
      "You demonstrate empathy by sharing personal experiences, including strengths, weaknesses, and failures.",
  },
  "c7b8d1e3-1c91-4589-ac7b-f1ef4ca64ce0": {
    competency: "inclusiveCollaboration",
    expectation: "beginner",
    id: "c7b8d1e3-1c91-4589-ac7b-f1ef4ca64ce0",
    description:
      "You demonstrate self-awareness by understanding the impact of your actions and their reception by others.",
  },
  "c3c374c8-c4a5-4415-b681-c13d44169d51": {
    competency: "inclusiveCollaboration",
    expectation: "beginner",
    id: "c3c374c8-c4a5-4415-b681-c13d44169d51",
    description:
      "You hold yourself accountable for cultivating an inclusive work environment and collaborative practices.",
  },
  "75da7507-4628-494f-a5ee-9a8c4c6aaf51": {
    competency: "inclusiveCollaboration",
    expectation: "beginner",
    id: "75da7507-4628-494f-a5ee-9a8c4c6aaf51",
    description:
      "You're learning to actively engage and collaborate with team members in various roles within and across departments/functions.",
  },
  // Intermediate
  "d382c036-276a-4e83-9f2d-fd5f945e8ff4": {
    competency: "inclusiveCollaboration",
    expectation: "intermediate",
    id: "d382c036-276a-4e83-9f2d-fd5f945e8ff4",
    description:
      "You encourage open communication of diverse ideas and perspectives, facilitating collaboration towards shared goals.",
  },
  "aa724268-7d6c-456d-a3c0-142459ad4b99": {
    competency: "inclusiveCollaboration",
    expectation: "intermediate",
    id: "aa724268-7d6c-456d-a3c0-142459ad4b99",
    description:
      "You lead by example in fostering an environment where everyone feels comfortable speaking openly and sharing ideas.",
  },
  "c2318c79-887e-4705-820c-c33158ebbdc6": {
    competency: "inclusiveCollaboration",
    expectation: "intermediate",
    id: "c2318c79-887e-4705-820c-c33158ebbdc6",
    description:
      "You champion individual differences, cultivating a culture of inclusivity and collaboration.",
  },
  "533f103f-f00b-4e67-9115-afc8f0540e92": {
    competency: "inclusiveCollaboration",
    expectation: "intermediate",
    id: "533f103f-f00b-4e67-9115-afc8f0540e92",
    description:
      "You listen and respond respectfully to different points of view, creating a safe space for everyone to contribute.",
  },
  "c2b37008-ad4b-47d5-9184-6f5501f28f40": {
    competency: "inclusiveCollaboration",
    expectation: "intermediate",
    id: "c2b37008-ad4b-47d5-9184-6f5501f28f40",
    description:
      "You actively collaborate with team members as both a mentor and a mentee, demonstrating engaged and reciprocal learning.",
  },
  // Advanced
  "cb24244d-6a91-4f6d-aa6c-f4ee9d484ead": {
    competency: "inclusiveCollaboration",
    expectation: "advanced",
    id: "cb24244d-6a91-4f6d-aa6c-f4ee9d484ead",
    description:
      "You uphold an inclusive environment by speaking up against non-inclusive behaviors and practices.",
  },
  "7343e75b-a13b-4475-a2a0-e4436d5188db": {
    competency: "inclusiveCollaboration",
    expectation: "advanced",
    id: "7343e75b-a13b-4475-a2a0-e4436d5188db",
    description:
      "You embrace the diverse experiences and skills within your team, fostering a supportive and inclusive environment.",
  },
  "6924b54d-10fc-4874-81be-a5b4fc07d01b": {
    competency: "inclusiveCollaboration",
    expectation: "advanced",
    id: "6924b54d-10fc-4874-81be-a5b4fc07d01b",
    description:
      "You actively collaborate by acknowledging and giving credit where it's due.",
  },
  "3fb1ec15-7532-495e-8627-676f723d9547": {
    competency: "inclusiveCollaboration",
    expectation: "advanced",
    id: "3fb1ec15-7532-495e-8627-676f723d9547",
    description:
      "You value and respect the unique perspectives that each individual brings to the team, fostering an environment where everyone feels valued and can shine.",
  },
  "a2993053-0b21-473f-a70b-0a34d0301717": {
    competency: "inclusiveCollaboration",
    expectation: "advanced",
    id: "a2993053-0b21-473f-a70b-0a34d0301717",
    description:
      "You actively seek and amplify diverse opinions, ensuring everyone's voice contributes to the shared goal.",
  },
  "fa50604c-bd91-417c-802a-d28d85bfa37e": {
    competency: "inclusiveCollaboration",
    expectation: "advanced",
    id: "fa50604c-bd91-417c-802a-d28d85bfa37e",
    description:
      "You encourage active engagement and collaboration among team members within and across departments/functions.",
  },
  // Expert
  "1cdc46e0-a484-4ec8-895a-5bab102e5cdb": {
    competency: "inclusiveCollaboration",
    expectation: "expert",
    id: "1cdc46e0-a484-4ec8-895a-5bab102e5cdb",
    description:
      "You actively recognize and reward inclusive and collaborative behavior, fostering an environment where everyone can shine, within your department.",
  },
  "32dbdd9c-c251-4dd1-98e1-d615ca165aec": {
    competency: "inclusiveCollaboration",
    expectation: "expert",
    id: "32dbdd9c-c251-4dd1-98e1-d615ca165aec",
    description:
      "You empower team members to practice decision-making authority.",
  },
  "1bf99ced-f43e-495f-9f15-cabbc60db033": {
    competency: "inclusiveCollaboration",
    expectation: "expert",
    id: "1bf99ced-f43e-495f-9f15-cabbc60db033",
    description:
      "You encourage and support the proposal of new ideas, empowering team members to take ownership and make decisions.",
  },
  "3a5a1027-100d-4f58-b20c-49dd1577b96c": {
    competency: "inclusiveCollaboration",
    expectation: "expert",
    id: "3a5a1027-100d-4f58-b20c-49dd1577b96c",
    description:
      "You utilize an inclusive approach in strategic decision-making, fostering collaboration.",
  },
  // Leading Expert
  "089bf7a2-3948-4098-ba22-266dbf887a63": {
    competency: "inclusiveCollaboration",
    expectation: "leading expert",
    id: "089bf7a2-3948-4098-ba22-266dbf887a63",
    description:
      "You champion diversity, equity, and inclusion, influencing others to do the same and fostering a culture of inclusive collaboration across the organization.",
  },
  "c324771d-3ebc-42a9-88f5-87c4ffa19da9": {
    competency: "inclusiveCollaboration",
    expectation: "leading expert",
    id: "c324771d-3ebc-42a9-88f5-87c4ffa19da9",
    description:
      "You make the business case for diversity and inclusion, helping the organization understand its impact on our shared goals.",
  },
  "e80d370d-9ef4-4946-9b78-13b72808b372": {
    competency: "inclusiveCollaboration",
    expectation: "leading expert",
    id: "e80d370d-9ef4-4946-9b78-13b72808b372",
    description:
      "You establish accountability measures for progress in diversity, equity, and inclusion within the organization.",
  },
  "dad2cd99-a02b-49af-aa8a-3b6d54ab3073": {
    competency: "inclusiveCollaboration",
    expectation: "leading expert",
    id: "dad2cd99-a02b-49af-aa8a-3b6d54ab3073",
    description:
      "You recognize and reward inclusive behavior across the organization, promoting a culture where everyone can shine.",
  },
} as const;

// This allows us to extract a literal union type from fields in the array,
//   and if there's an issue, Typescript will complain when it's consumed
//   instead of here.
export type Skill = SkillSchema & (typeof Skills)[keyof typeof Skills];
