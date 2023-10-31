import type { Competencies, Expectations } from ".";
import type { UUID } from "./types";

export interface Skill {
  competency: (typeof Competencies)[number]["key"];
  expectation: (typeof Expectations)[number]["key"];
  id: UUID;
  description: string;
}

export const Skills: Record<UUID, Skill> = {
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

  "c75edc33-4e86-45a7-ab2e-d922e6bdf03f": {
    competency: "deliveringResultsForImpact",
    expectation: "leadingExpert",
    id: "c75edc33-4e86-45a7-ab2e-d922e6bdf03f",
    description:
      "You help all of Khan Academy get unstuck, finding ways to make the company more effective at delivering impact. ",
  },
  "da278638-ed8d-495d-826e-d86fca229f3c": {
    competency: "deliveringResultsForImpact",
    expectation: "leadingExpert",
    id: "da278638-ed8d-495d-826e-d86fca229f3c",
    description:
      "You create and develop solutions that set industry standards, thereby significantly enhancing our organizational impact.",
  },
  "421f9532-a70e-4ee0-9c45-f278c8f2c9b3": {
    competency: "deliveringResultsForImpact",
    expectation: "leadingExpert",
    id: "421f9532-a70e-4ee0-9c45-f278c8f2c9b3",
    description:
      "By focusing on the most important goals of Khan Academy, you contribute in a way that exceeds the immediate challenges and leads to meaningful, far-reaching results in our goals and KPIs.",
  },
  "0b6368f7-5a21-4658-9168-cab781dba853": {
    competency: "deliveringResultsForImpact",
    expectation: "leadingExpert",
    id: "0b6368f7-5a21-4658-9168-cab781dba853",
    description:
      "You craft systems that operate efficiently, without a need for your involvement, throughout Khan Academy and beyond.",
  },

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

  "49ec3d97-bd66-4a47-bed9-df521331e774": {
    competency: "domainExpertise",
    expectation: "leadingExpert",
    id: "49ec3d97-bd66-4a47-bed9-df521331e774",
    description:
      "Your contributions to the field (e.g. talks, open source projects, research papers) have meaningful impact beyond Khan Academy.",
  },
  "8889b829-f8ef-430b-90c5-eed068081e70": {
    competency: "domainExpertise",
    expectation: "leadingExpert",
    id: "8889b829-f8ef-430b-90c5-eed068081e70",
    description:
      "Your expertise helps Khan Academy exceed its KPIs and organization priorities.",
  },
  "2f6d04ec-6155-4aac-86fe-d3d3ace19c3e": {
    competency: "domainExpertise",
    expectation: "leadingExpert",
    id: "2f6d04ec-6155-4aac-86fe-d3d3ace19c3e",
    description:
      "You use your expertise to come up with solutions to long-standing or seemingly intractable problems in the broader industry.",
  },
  "ef2b3abc-05aa-4583-9723-51b54eeae206": {
    competency: "domainExpertise",
    expectation: "leadingExpert",
    id: "ef2b3abc-05aa-4583-9723-51b54eeae206",
    description:
      "You contribute to the advancement of the wider industry in your domain.",
  },

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

  "3c645519-d852-49b9-bbf4-2da68d30edf1": {
    competency: "problemSolving",
    expectation: "leadingExpert",
    id: "3c645519-d852-49b9-bbf4-2da68d30edf1",
    description:
      "You create solutions that get near-unanimous acceptance and adoption from critical stakeholders, and which provide continual benefit with little support or overhead for a very long lifespan.",
  },
  "16a921d7-65d8-4740-a84e-a9e4ccceed63": {
    competency: "problemSolving",
    expectation: "leadingExpert",
    id: "16a921d7-65d8-4740-a84e-a9e4ccceed63",
    description:
      "You identify barriers that are slowing down teams and initiatives at Khan Academy and create practical solutions to increase efficiency.",
  },
  "4cdf67e6-394a-4d08-95f3-ccd35407e7be": {
    competency: "problemSolving",
    expectation: "leadingExpert",
    id: "4cdf67e6-394a-4d08-95f3-ccd35407e7be",
    description:
      "You are a leader who provides actionable direction to teams in the face of complex problems involving multiple stakeholders.",
  },
  "0a5df981-c5ef-452e-8468-a426e2abaee1": {
    competency: "problemSolving",
    expectation: "leadingExpert",
    id: "0a5df981-c5ef-452e-8468-a426e2abaee1",
    description: "You create new solutions that solve industry-wide problems.",
  },

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
      "You are adept at giving and receiving constructive feedback and you both give and receive feedback clearly and with empathy.",
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

  "38287017-82cc-45f0-a357-334306f9fafb": {
    competency: "communicationAndEngagement",
    expectation: "leadingExpert",
    id: "38287017-82cc-45f0-a357-334306f9fafb",
    description:
      "You've made significant changes to how Khan Academy handles documentation, facilitation, or collaboration that has improved the functioning of the entire organization.",
  },
  "324f76b9-4926-484e-9682-d0739612e048": {
    competency: "communicationAndEngagement",
    expectation: "leadingExpert",
    id: "324f76b9-4926-484e-9682-d0739612e048",
    description:
      "You create spaces and channels that improve cross-team and inter-departmental communication at Khan Academy.",
  },
  "a677a230-6dbf-4be6-be1b-b68f89f34ca0": {
    competency: "communicationAndEngagement",
    expectation: "leadingExpert",
    id: "a677a230-6dbf-4be6-be1b-b68f89f34ca0",
    description:
      "Others turn to you for advice on delivering difficult feedback and communicating effectively, recognizing your expertise in engaging communication.",
  },
  "8c33e863-2949-41eb-9819-deba3c683bf2": {
    competency: "communicationAndEngagement",
    expectation: "leadingExpert",
    id: "8c33e863-2949-41eb-9819-deba3c683bf2",
    description:
      "Your presence and example has a strong, positive influence on Khan Academy's working environment.",
  },

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

  "ff91ea5e-756b-4a10-968e-c1d1a04887c4": {
    competency: "leadership",
    expectation: "leadingExpert",
    id: "ff91ea5e-756b-4a10-968e-c1d1a04887c4",
    description:
      "You have successfully changed how your department functions in a way that has moved both Khan Academy forward and established a best practice in the industry.",
  },
  "d231788f-6efd-4145-8f43-140624a6b083": {
    competency: "leadership",
    expectation: "leadingExpert",
    id: "d231788f-6efd-4145-8f43-140624a6b083",
    description:
      "You are accountable for the success of your department with respect to attracting top talent and ensuring the strength of our brand.",
  },
  "c484d51d-622c-41fe-972d-83e77ec7b24b": {
    competency: "leadership",
    expectation: "leadingExpert",
    id: "c484d51d-622c-41fe-972d-83e77ec7b24b",
    description:
      "You regularly represent Khan Academy publicly (e.g. via blog posts, speaking, etc.).",
  },
  "02f42e0c-93d8-4db2-be10-d938268b7f14": {
    competency: "leadership",
    expectation: "leadingExpert",
    id: "02f42e0c-93d8-4db2-be10-d938268b7f14",
    description:
      "Your leadership is cited by many on the team as a significantly positive aspect of working at Khan Academy.",
  },

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

  "089bf7a2-3948-4098-ba22-266dbf887a63": {
    competency: "inclusiveCollaboration",
    expectation: "leadingExpert",
    id: "089bf7a2-3948-4098-ba22-266dbf887a63",
    description:
      "You champion diversity, equity, and inclusion, influencing others to do the same and fostering a culture of inclusive collaboration across the organization.",
  },
  "c324771d-3ebc-42a9-88f5-87c4ffa19da9": {
    competency: "inclusiveCollaboration",
    expectation: "leadingExpert",
    id: "c324771d-3ebc-42a9-88f5-87c4ffa19da9",
    description:
      "You make the business case for diversity and inclusion, helping the organization understand its impact on our shared goals.",
  },
  "e80d370d-9ef4-4946-9b78-13b72808b372": {
    competency: "inclusiveCollaboration",
    expectation: "leadingExpert",
    id: "e80d370d-9ef4-4946-9b78-13b72808b372",
    description:
      "You establish accountability measures for progress in diversity, equity, and inclusion within the organization.",
  },
  "dad2cd99-a02b-49af-aa8a-3b6d54ab3073": {
    competency: "inclusiveCollaboration",
    expectation: "leadingExpert",
    id: "dad2cd99-a02b-49af-aa8a-3b6d54ab3073",
    description:
      "You recognize and reward inclusive behavior across the organization, promoting a culture where everyone can shine.",
  },
  "73d82cf6-0a7a-4b70-a770-0be1314a35a0": {
    competency: "navigateChangeAndDifficulty",
    expectation: "beginner",
    id: "73d82cf6-0a7a-4b70-a770-0be1314a35a0",
    description:
      "You are open to learning and receptive to feedback aimed at improving your leadership skills.",
  },
  "f6edd6f6-3830-4352-bebd-16b353d67393": {
    competency: "coachingAndFeedback",
    expectation: "beginner",
    id: "f6edd6f6-3830-4352-bebd-16b353d67393",
    description:
      "You understand the importance of giving constructive feedback and make initial attempts to deliver it to your team members.",
  },
  "8eb34903-ddeb-4bdd-a6f5-377f11a2081b": {
    competency: "coachingAndFeedback",
    expectation: "beginner",
    id: "8eb34903-ddeb-4bdd-a6f5-377f11a2081b",
    description:
      "You are aware of the role of active listening in coaching and feedback and have started to practice this skill.",
  },
  "bd92b9f4-3028-44c8-a7db-ac9395aa1e3c": {
    competency: "coachingAndFeedback",
    expectation: "beginner",
    id: "bd92b9f4-3028-44c8-a7db-ac9395aa1e3c",
    description:
      "You acknowledge the accomplishments of team members, fostering a positive work environment.",
  },
  "be29b04c-42d6-432c-9f1b-4267c23ebd32": {
    competency: "coachingAndFeedback",
    expectation: "intermediate",
    id: "be29b04c-42d6-432c-9f1b-4267c23ebd32",
    description:
      "Building on your openness to feedback, you now actively seek it out to understand your areas for improvement as a leader.",
  },
  "7cd0ffd5-3255-45ca-87f9-327861b40fa7": {
    competency: "coachingAndFeedback",
    expectation: "intermediate",
    id: "7cd0ffd5-3255-45ca-87f9-327861b40fa7",
    description:
      "You consistently provide constructive feedback to your team members in a way that is respectful and supportive, focusing on specific behaviors and their impact.",
  },
  "f1ed72b3-922e-458e-932e-f9721750879e": {
    competency: "coachingAndFeedback",
    expectation: "intermediate",
    id: "f1ed72b3-922e-458e-932e-f9721750879e",
    description:
      "You regularly practice active listening in both one-on-one conversations and in facilitating discussions on your team.",
  },
  "a1522ecc-83ae-4041-855e-78d81fdb4a40": {
    competency: "coachingAndFeedback",
    expectation: "intermediate",
    id: "a1522ecc-83ae-4041-855e-78d81fdb4a40",
    description:
      "You make it a regular practice to celebrate both individual and team successes, contributing to a positive and joyful work environment.",
  },
  "e8da119c-693b-4e6a-beea-e8e175feae52": {
    competency: "coachingAndFeedback",
    expectation: "advanced",
    id: "e8da119c-693b-4e6a-beea-e8e175feae52",
    description:
      "You regularly incorporate feedback into your leadership style, using it as a tool for continuous improvement and coaching your team to do the same.",
  },
  "17d72050-58a6-4f74-97c3-f6ee519236e0": {
    competency: "coachingAndFeedback",
    expectation: "advanced",
    id: "17d72050-58a6-4f74-97c3-f6ee519236e0",
    description:
      "You recognize that different team members may have different needs and learning styles, thus you are adept at tailoring your coaching and feedback to suit individual preferences and abilities.",
  },
  "3e3045c1-a48a-4bec-8c80-038e2d47baf3": {
    competency: "coachingAndFeedback",
    expectation: "advanced",
    id: "3e3045c1-a48a-4bec-8c80-038e2d47baf3",
    description:
      "You pay close attention to what is being said and what is not being said; you ask clarifying questions; you show empathy to fully understand the concerns and perspectives of others.",
  },
  "569cfdc4-00f0-4f75-96a9-68da60ae1afa": {
    competency: "coachingAndFeedback",
    expectation: "advanced",
    id: "569cfdc4-00f0-4f75-96a9-68da60ae1afa",
    description:
      "Your feedback & coaching create opportunities for shared success, turning challenges into learning experiences and celebrating achievements across your team.",
  },
  "1c7751aa-90d4-4a4d-a99c-04490fb4e4da": {
    competency: "coachingAndFeedback",
    expectation: "expert",
    id: "1c7751aa-90d4-4a4d-a99c-04490fb4e4da",
    description:
      "You cultivate an environment where specific, actionable feedback is solicited frequently, given effectively, and acted upon, leading to a positive cycle of improvement.",
  },
  "ffea9268-65c6-41e2-877d-a2586f75ab62": {
    competency: "coachingAndFeedback",
    expectation: "expert",
    id: "ffea9268-65c6-41e2-877d-a2586f75ab62",
    description:
      "You take active listening a step further by creating a culture of empathy and understanding within your team, helping them feel valued and heard.",
  },
  "cd6f3d57-2a4b-4ffd-975d-5e2cc3d19537": {
    competency: "coachingAndFeedback",
    expectation: "expert",
    id: "cd6f3d57-2a4b-4ffd-975d-5e2cc3d19537",
    description:
      "Your coaching & feedback help foster a joyful and supportive work environment where successes are celebrated, challenges are welcomed, and growth is continuous.",
  },
  "6944a1bb-b20a-4d3b-81be-fe1ec2af5987": {
    competency: "coachingAndFeedback",
    expectation: "leadingExpert",
    id: "6944a1bb-b20a-4d3b-81be-fe1ec2af5987",
    description:
      "You are widely recognized as an example of excellence in setting the highest standard for integrating feedback and coaching into your team's development. Your approach has become the benchmark for others to follow.",
  },
  "012843b5-16a4-4491-ae5e-42b9ec1890d4": {
    competency: "coachingAndFeedback",
    expectation: "leadingExpert",
    id: "012843b5-16a4-4491-ae5e-42b9ec1890d4",
    description:
      "Your influence extends throughout the organization as you architect a culture where feedback is not just a process but a fundamental part of growth. You've expanded the horizons of employees across the company, fostering an environment of continuous learning, personal development, and delivery of high-quality work.",
  },
  "efb7caa7-7ae9-43a8-ab9e-ba6f5d338bc3": {
    competency: "coachingAndFeedback",
    expectation: "leadingExpert",
    id: "efb7caa7-7ae9-43a8-ab9e-ba6f5d338bc3",
    description:
      "Your dedication to fostering open dialogue, active listening, and continual skill development has transformed your team into a high-performing group that excels in collaboration within and across departments.",
  },
  "d0e15605-82d4-4c73-bcae-69d8a6a7a09f": {
    competency: "navigateChangeAndDifficulty",
    expectation: "beginner",
    id: "d0e15605-82d4-4c73-bcae-69d8a6a7a09f",
    description:
      "You are beginning to demonstrate self-awareness regarding your own emotional state when confronted with change and/or challenging situations, and are showing the early signs of using what you know to better inform your future actions.",
  },
  "741f4ed8-86a6-4a51-874b-f441b86fa3a5": {
    competency: "navigateChangeAndDifficulty",
    expectation: "beginner",
    id: "741f4ed8-86a6-4a51-874b-f441b86fa3a5",
    description:
      "You can make decisions when required, and are able to communicate the reasons behind these decisions to your team when asked.",
  },
  "22b55bf4-bfa5-480d-a89b-c2bfdb9ec5ba": {
    competency: "navigateChangeAndDifficulty",
    expectation: "beginner",
    id: "22b55bf4-bfa5-480d-a89b-c2bfdb9ec5ba",
    description:
      "You understand that change can be difficult for people to accept and are beginning to identify ways to more readily adapt to change yourself.",
  },
  "0e199882-5e0e-4c87-8b6d-834d8148698d": {
    competency: "navigateChangeAndDifficulty",
    expectation: "intermediate",
    id: "0e199882-5e0e-4c87-8b6d-834d8148698d",
    description:
      "You demonstrate the ability to stay calm in uncomfortable situations and are beginning to develop self-regulation by choosing to manage your emotions in the moment.",
  },
  "fadeb057-d0ad-4b9b-9c32-c18a47c3c910": {
    competency: "navigateChangeAndDifficulty",
    expectation: "intermediate",
    id: "fadeb057-d0ad-4b9b-9c32-c18a47c3c910",
    description:
      "You make decisions in challenging situations and can explain your rationale, even when consensus may not be reached.",
  },
  "dc9e83e1-1062-4c1f-8526-4d30d407d637": {
    competency: "navigateChangeAndDifficulty",
    expectation: "intermediate",
    id: "dc9e83e1-1062-4c1f-8526-4d30d407d637",
    description:
      "You actively seek to understand the rationale behind decisions that benefit the organization in an effort to commit to them, even if you disagree with them.",
  },
  "41c5fc1d-040e-4d6a-aed8-ca1b520a0023": {
    competency: "navigateChangeAndDifficulty",
    expectation: "intermediate",
    id: "41c5fc1d-040e-4d6a-aed8-ca1b520a0023",
    description:
      "You can foresee the impacts of change on your team and stakeholders, and have started to develop strategies to manage it effectively.",
  },
  "cf1acea7-20eb-49e5-9d08-a91f9d08abb3": {
    competency: "navigateChangeAndDifficulty",
    expectation: "advanced",
    id: "cf1acea7-20eb-49e5-9d08-a91f9d08abb3",
    description:
      "You consistently reflect on your behaviors, thoughts, and feelings when encountering change and/or challenging situations.",
  },
  "d75af8af-3c3f-4913-bd87-673024fcac44": {
    competency: "navigateChangeAndDifficulty",
    expectation: "advanced",
    id: "d75af8af-3c3f-4913-bd87-673024fcac44",
    description:
      "You are able to make and stand by tough decisions that benefit the organization, sharing your reasoning in a transparent manner.",
  },
  "06d3aeb5-8040-4b24-92ce-b6f78b6a599f": {
    competency: "navigateChangeAndDifficulty",
    expectation: "advanced",
    id: "06d3aeb5-8040-4b24-92ce-b6f78b6a599f",
    description:
      "You voice your disagreement in a productive manner while decisions open for input are being evaluated in an effort to facilitate the best outcomes; once the decision has been made, you commit to it.",
  },
  "0da0de80-3369-4140-b884-7474935dff71": {
    competency: "navigateChangeAndDifficulty",
    expectation: "advanced",
    id: "0da0de80-3369-4140-b884-7474935dff71",
    description:
      "You empathize with your team by understanding the impact of decsions on them, and you guide them through change by addressing their concerns and resistance effectively.",
  },
  "4437efc8-2097-4edc-9f08-1fcc388f0fe5": {
    competency: "navigateChangeAndDifficulty",
    expectation: "expert",
    id: "4437efc8-2097-4edc-9f08-1fcc388f0fe5",
    description:
      "Self-awareness, self-regulation and empathy are now hallmarks of your leadership style, helping you navigate complex emotions and facilitate effective communication during challenging conversations.",
  },
  "8eda6299-5ee1-480c-97de-479da58a5039": {
    competency: "navigateChangeAndDifficulty",
    expectation: "expert",
    id: "8eda6299-5ee1-480c-97de-479da58a5039",
    description:
      "You consistently make and stand by decisions that benefit the organization, sharing your thought process in a way that fosters trust, even when consensus is hard to reach.",
  },
  "8e51e269-f731-4688-ae02-bc29881d68eb": {
    competency: "navigateChangeAndDifficulty",
    expectation: "expert",
    id: "8e51e269-f731-4688-ae02-bc29881d68eb",
    description:
      "You model 'disagree and commit' leadership by providing relevent facts that support your dissenting opinion, by actively committing to the achievement of the goal once the final decision has been made, and by leading your team and colleagues to support the decision.",
  },
  "5c70ed81-c584-48a7-865d-06cc6b1f4860": {
    competency: "navigateChangeAndDifficulty",
    expectation: "expert",
    id: "5c70ed81-c584-48a7-865d-06cc6b1f4860",
    description:
      "You have become adept at managing change, using your understanding of its impacts to guide others through it, and addressing resistance in a productive and empathetic manner.",
  },
  "0b2170c0-07f8-4435-a347-48d986fed1e0": {
    competency: "navigateChangeAndDifficulty",
    expectation: "leadingExpert",
    id: "0b2170c0-07f8-4435-a347-48d986fed1e0",
    description:
      "You have earned respect across the organization for your mastery of emotional intelligence in your conversations as a tool to manage complex emotions and facilitate effective and empathetic communication.",
  },
  "67a61645-73fe-4d3b-80cd-ddd811a20c2f": {
    competency: "navigateChangeAndDifficulty",
    expectation: "leadingExpert",
    id: "67a61645-73fe-4d3b-80cd-ddd811a20c2f",
    description:
      "Your ability to make and stand by tough decisions, along with your transparency about the rationale, has earned you the respect of your team and the organization.",
  },
  "b054c1ae-1f74-4655-a862-d4453604a985": {
    competency: "navigateChangeAndDifficulty",
    expectation: "leadingExpert",
    id: "b054c1ae-1f74-4655-a862-d4453604a985",
    description:
      "Your opinion and feedback is often sought by others when important decisions are being evaluated because of your mastery of 'disagree and commit'.",
  },
  "ddb5ac8d-85ed-476b-b63a-216cbaeaae9b": {
    competency: "navigateChangeAndDifficulty",
    expectation: "leadingExpert",
    id: "ddb5ac8d-85ed-476b-b63a-216cbaeaae9b",
    description:
      "Your understanding of change and its impacts has made you a guide for others in times of transformation, skillfully managing resistance and fostering acceptance and adoption to deliver maximum benefit.",
  },
  "b9ecd5b3-e0ca-49e4-81d2-cc4f976e8b89": {
    competency: "ensuresAccountability",
    expectation: "beginner",
    id: "b9ecd5b3-e0ca-49e4-81d2-cc4f976e8b89",
    description:
      "You recognize the importance of meeting intended outcomes and are learning to monitor progress towards these goals.",
  },
  "a890bc48-2de7-4cc3-a316-d16fed3ea44e": {
    competency: "ensuresAccountability",
    expectation: "beginner",
    id: "a890bc48-2de7-4cc3-a316-d16fed3ea44e",
    description:
      "You take responsibility for your decisions, actions, and failures.",
  },
  "2ad984d7-bcfe-4a57-9352-e0317aff09bc": {
    competency: "ensuresAccountability",
    expectation: "beginner",
    id: "2ad984d7-bcfe-4a57-9352-e0317aff09bc",
    description:
      "You are working to provide clarity about the various roles & responsibilities on your team.",
  },
  "553b8ae6-0647-4327-bf56-3faf868961b1": {
    competency: "ensuresAccountability",
    expectation: "beginner",
    id: "553b8ae6-0647-4327-bf56-3faf868961b1",
    description: "You follow through on commitments.",
  },
  "cabb1536-83d7-4ca5-8c4e-2ad506e9ed2e": {
    competency: "ensuresAccountability",
    expectation: "intermediate",
    id: "cabb1536-83d7-4ca5-8c4e-2ad506e9ed2e",
    description:
      "You have begun implementing periodic review & feedback of your team's work to help measure progress against key milestones.",
  },
  "8977f95f-6144-4e2f-b217-75d1e35490fa": {
    competency: "ensuresAccountability",
    expectation: "intermediate",
    id: "8977f95f-6144-4e2f-b217-75d1e35490fa",
    description:
      "You have started adjusting plans as needed, demonstrating flexibility in prioritization and problem-solving.",
  },
  "65ece652-3803-4181-9962-f1d561cb98bd": {
    competency: "ensuresAccountability",
    expectation: "intermediate",
    id: "65ece652-3803-4181-9962-f1d561cb98bd",
    description:
      "You act with a clear sense of ownership for your teams' decisions, actions, and failures.",
  },
  "4a7b5ed8-6875-4ace-ab72-23f5edf251ec": {
    competency: "ensuresAccountability",
    expectation: "intermediate",
    id: "4a7b5ed8-6875-4ace-ab72-23f5edf251ec",
    description:
      "You follow through on commitments and make sure your team members do the same.",
  },
  "5424a2e5-38d4-4e1c-92ec-eaa84bda2a75": {
    competency: "ensuresAccountability",
    expectation: "advanced",
    id: "5424a2e5-38d4-4e1c-92ec-eaa84bda2a75",
    description:
      "You consistently establish clear responsibilities and processes for monitoring work, evaluating feedback, and measuring results.",
  },
  "8cddaa67-3d0e-4555-8dac-ac0f86dcea07": {
    competency: "ensuresAccountability",
    expectation: "advanced",
    id: "8cddaa67-3d0e-4555-8dac-ac0f86dcea07",
    description:
      "You are adept at adjusting plans as needed, effectively managing obstacles and holding both yourself and others accountable.",
  },
  "a0795969-7588-4a41-a442-e07cf12b446d": {
    competency: "ensuresAccountability",
    expectation: "advanced",
    id: "a0795969-7588-4a41-a442-e07cf12b446d",
    description:
      "You have successfully fostered a culture of responsibility, where team members feel empowered and accountable for their roles and outcomes.",
  },
  "09ec8c26-9c8f-4eb5-88f6-c97ff2668469": {
    competency: "ensuresAccountability",
    expectation: "expert",
    id: "09ec8c26-9c8f-4eb5-88f6-c97ff2668469",
    description:
      "You work with others outside your team to determine clear performance standards and establish processes for monitoring work, evaluating feedback, and measuring results.",
  },
  "cf97301d-ba8d-4ee3-b0a4-8d7f84366932": {
    competency: "ensuresAccountability",
    expectation: "expert",
    id: "cf97301d-ba8d-4ee3-b0a4-8d7f84366932",
    description:
      "You have developed the strategic insight needed to recognize when plans need to be adapted and you re-orient everyone to ensure a high level of accountability and progress is maintained.",
  },
  "bd96fd5f-140b-4063-ad60-d2320d9cea21": {
    competency: "ensuresAccountability",
    expectation: "expert",
    id: "bd96fd5f-140b-4063-ad60-d2320d9cea21",
    description:
      "You have built a strong culture of accountability within your team, with members demonstrating a sense of ownership and responsibility for their roles and results.",
  },
  "33af770e-933e-4f28-88c0-8588ae331155": {
    competency: "ensuresAccountability",
    expectation: "leadingExpert",
    id: "33af770e-933e-4f28-88c0-8588ae331155",
    description:
      "You are a process expert in ensuring your team members have articulated the goals / outcomes for which they demonstrate a strong sense of ownership.",
  },
  "91e327b9-bd8c-4a20-949a-311ebaaa4105": {
    competency: "ensuresAccountability",
    expectation: "leadingExpert",
    id: "91e327b9-bd8c-4a20-949a-311ebaaa4105",
    description:
      "You have designed feedback loops that scale across the organization to help ensure delivery of intended outcomes and foster a culture of continuous learning & improvement.",
  },
  "fd0a34fa-0ddf-49ed-9952-0f032f7f60c6": {
    competency: "ensuresAccountability",
    expectation: "leadingExpert",
    id: "fd0a34fa-0ddf-49ed-9952-0f032f7f60c6",
    description:
      "You lead by example, modeling accountability and challenging your colleagues and teams with whom you work across & outside the organization to uphold their responsibilities and adapt as necessary to achieve the desired outcomes.",
  },
  "adfaf687-f9a5-40b8-9326-d9274658b13a": {
    competency: "ensuresAccountability",
    expectation: "leadingExpert",
    id: "adfaf687-f9a5-40b8-9326-d9274658b13a",
    description:
      "You have mastered the art of strategically observing patterns, identifying areas for enhancement, and swiftly implementing alternative approaches which enables you to adjust plans with precision and uphold accountability.",
  },
} as const;
