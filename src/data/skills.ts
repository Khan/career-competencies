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
    description: "You understand scope of work before taking on tasks.",
  },
  "070a6645-89c2-42be-ad50-31972e9a66d3": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "070a6645-89c2-42be-ad50-31972e9a66d3",
    description:
      "You check the quality of your work following relevant examples.",
  },
  "db1ab02b-14e2-4fe4-be40-8d3e316aa6f6": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "db1ab02b-14e2-4fe4-be40-8d3e316aa6f6",
    description:
      "You take ownership of your work product and quickly address issues as they arise.",
  },
  "de194914-9583-49dd-be95-c6de9875c4e1": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "de194914-9583-49dd-be95-c6de9875c4e1",
    description:
      "You collect and incorporate feedback on the quality of your work.",
  },
  "4e7b45f0-10b3-458f-a524-f2deabefbdcf": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "4e7b45f0-10b3-458f-a524-f2deabefbdcf",
    description:
      "You follow your team's best practices to bring your work to completion.",
  },
  "2690b50a-85fd-469c-bfbf-03d7f3f690ed": {
    competency: "deliveringResultsForImpact",
    expectation: "beginner",
    id: "2690b50a-85fd-469c-bfbf-03d7f3f690ed",
    description:
      "You participate in your team's planning and are learning to accurately estimate how long work will take.",
  },
  // Intermediate
  "ee565102-899f-4025-93f7-c4b395be20f7": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "ee565102-899f-4025-93f7-c4b395be20f7",
    description:
      "You estimate accurate timelines for tasks and deliver work at a steady, predictable pace to hit your deadlines.",
  },
  "4909753f-bbb1-4482-b9b6-a3e579b204ce": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "4909753f-bbb1-4482-b9b6-a3e579b204ce",
    description:
      "You effectively use a variety of testing methods and monitoring tools to ensure the quality and accuracy of your work while in progress and after completion.",
  },
  "d9ce28dd-cdef-49a8-8059-3d527d303dce": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "d9ce28dd-cdef-49a8-8059-3d527d303dce",
    description:
      "You consider many different use cases but avoid over analyzing.",
  },
  "27b702c4-88b8-4b87-a693-821725bc8eb0": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "27b702c4-88b8-4b87-a693-821725bc8eb0",
    description:
      "You deliver complete solutions and communicate regular progress along the way.",
  },
  "123afcb4-d131-40d1-9ad9-8442498c4142": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "123afcb4-d131-40d1-9ad9-8442498c4142",
    description:
      "You're a responsible user of our shared resources, considering the effect your work has outside your team and ensuring you are not diminishing their progress.",
  },
  "cfa9fce6-af70-43ea-a2f2-1593b053f291": {
    competency: "deliveringResultsForImpact",
    expectation: "intermediate",
    id: "cfa9fce6-af70-43ea-a2f2-1593b053f291",
    description:
      "You identify important tradeoffs and negotiate them, either independently or with your team.",
  },
  // Advanced
  "32217fe2-8b04-462b-8c23-d29d0673c65f": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "32217fe2-8b04-462b-8c23-d29d0673c65f",
    description:
      "You collaboratively roadmap large tracks of work with reliable estimates of time, effort, and risk, and you help ensure your team can hit deadlines.",
  },
  "23fba793-2e41-443a-b26c-a4c1c93daf63": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "23fba793-2e41-443a-b26c-a4c1c93daf63",
    description:
      "You communicate with teammates, collaborators, and stakeholders, and you take responsibility for your plans, both when they're on track and when they aren't.",
  },
  "e59a4412-0260-41e6-b628-bbf421e2bdec": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "e59a4412-0260-41e6-b628-bbf421e2bdec",
    description:
      "You use an array of methods to evaluate your work and to ensure the quality and accuracy of your work before delivery.",
  },
  "9e560890-2e22-43d4-9241-dae098911ca5": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "9e560890-2e22-43d4-9241-dae098911ca5",
    description:
      "You monitor the health of your work and that of adjacent systems to avoid surprises.",
  },
  "b50d75b8-9551-4e18-9a0e-05cbdd7a2fb4": {
    competency: "deliveringResultsForImpact",
    expectation: "advanced",
    id: "b50d75b8-9551-4e18-9a0e-05cbdd7a2fb4",
    description:
      "You surface and understand how multiple large projects - worked on by you and others - intersect and ensure minimal friction .",
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
      "You bring together the work of many teams and individuals into a cohesive, achievable plan that aligns with goals and deadlines.",
  },
  "5ec917c4-3485-49bf-9533-dd4c7432fcbe": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "5ec917c4-3485-49bf-9533-dd4c7432fcbe",
    description:
      "You devise, apply, and share novel and nuanced ways to ensure the quality and continued health of complex systems and processes.",
  },
  "f1c8a8dc-3738-4caf-9e2b-4091c4b35e6e": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "f1c8a8dc-3738-4caf-9e2b-4091c4b35e6e",
    description:
      "You incorporate awareness and understanding of work happening outside your team to minimize surprises and make projects more likely to succeed.",
  },
  "78320b8b-01f8-4cdb-921d-f9aeb31f2592": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "78320b8b-01f8-4cdb-921d-f9aeb31f2592",
    description:
      "You work effectively at a variety of speeds: fast when risk is low and time is tight; more deliberately when a cautious and coordinated process is warranted.",
  },
  "79672500-dbfa-42be-a170-2739a59821b0": {
    competency: "deliveringResultsForImpact",
    expectation: "expert",
    id: "79672500-dbfa-42be-a170-2739a59821b0",
    description:
      "You develop widely used metrics that enable teams to better understand and deliver their work.",
  },
  // Leading Expert
  "c75edc33-4e86-45a7-ab2e-d922e6bdf03f": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "c75edc33-4e86-45a7-ab2e-d922e6bdf03f",
    description:
      "You remove widely-felt barriers to productivity, finding ways to make the entire team more effective at delivering solutions.",
  },
  "da278638-ed8d-495d-826e-d86fca229f3c": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "da278638-ed8d-495d-826e-d86fca229f3c",
    description:
      "You create tools, systems and processes to help the team deliver solutions that can be used across the industry.",
  },
  "421f9532-a70e-4ee0-9c45-f278c8f2c9b3": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "421f9532-a70e-4ee0-9c45-f278c8f2c9b3",
    description:
      "You work on the tasks that matter most, even if your capabilities far outweigh the challenge.",
  },
  "0b6368f7-5a21-4658-9168-cab781dba853": {
    competency: "deliveringResultsForImpact",
    expectation: "leading expert",
    id: "0b6368f7-5a21-4658-9168-cab781dba853",
    description:
      "You craft systems that continue to function and can be maintained without your continued involvement.",
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
      "Your expertise helps our department as a whole achieve and exceed its goals.",
  },
  "2f6d04ec-6155-4aac-86fe-d3d3ace19c3e": {
    competency: "domainExpertise",
    expectation: "leading expert",
    id: "2f6d04ec-6155-4aac-86fe-d3d3ace19c3e",
    description:
      "You use your expertise to come up with solutions to long-standing or seemingly intractable problems.",
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
    description: "You are able to clearly articulate questions.",
  },
  "8ac0a07d-2dc1-4400-afec-8be9e2846c82": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "8ac0a07d-2dc1-4400-afec-8be9e2846c82",
    description:
      "You are learning to collaborate with team members in various roles within and across departments / functions.",
  },
  "577494db-ec22-4991-a82d-a548fc005ee1": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "577494db-ec22-4991-a82d-a548fc005ee1",
    description:
      "You understand and follow Khan Academy's guide for using inclusive language.",
  },
  "6870e359-f417-409b-98e4-61d4dae1ccd1": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "6870e359-f417-409b-98e4-61d4dae1ccd1",
    description:
      "You know when to keep digging vs. when to ask for help. You know when you are stuck and need to be unblocked.",
  },
  "fcac9e47-e284-4aaf-b7d5-02cf815bd885": {
    competency: "communicationAndEngagement",
    expectation: "beginner",
    id: "fcac9e47-e284-4aaf-b7d5-02cf815bd885",
    description:
      "When you learn something new, or figure out the solution to a problem, you write documentation that helps others when they encounter similar issues.",
  },
  // Intermediate
  "0a27b816-7463-4a2f-9f75-dd8825d255cc": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "0a27b816-7463-4a2f-9f75-dd8825d255cc",
    description:
      "You regularly write documentation related to your work that is clear and easy to follow.",
  },
  "c924dc3b-fec7-4e01-a665-7ca6b1884acf": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "c924dc3b-fec7-4e01-a665-7ca6b1884acf",
    description:
      "You collaborate well with team members as both a mentor and a mentee.",
  },
  "5aef9121-61d7-4086-a116-0ecc9c8abfc9": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "5aef9121-61d7-4086-a116-0ecc9c8abfc9",
    description:
      "You are able to take in vague requirements and ask the right questions to ensure they are clarified.",
  },
  "4f72bdbc-ba9f-44e5-a399-078f58b7a759": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "4f72bdbc-ba9f-44e5-a399-078f58b7a759",
    description:
      "You have a sense for when and how to appropriately and effectively offer feedback.",
  },
  "c28f9f94-212f-4d8b-92eb-0e66fea823e0": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "c28f9f94-212f-4d8b-92eb-0e66fea823e0",
    description:
      "You seek out and receive constructive criticism well and do not express territorialism over your work.",
  },
  "2e64ae86-68d4-41aa-9560-ff73e7918c62": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "2e64ae86-68d4-41aa-9560-ff73e7918c62",
    description:
      "You listen when others are speaking and make space for your colleagues to share their thoughts.",
  },
  "41a1eb8d-8b34-4f35-9d43-08acc6a1db6c": {
    competency: "communicationAndEngagement",
    expectation: "intermediate",
    id: "41a1eb8d-8b34-4f35-9d43-08acc6a1db6c",
    description:
      "You actively participate in interviewing and provide thoughtful feedback.",
  },
  // Advanced
  "d31cbc52-dfbb-4cf4-9274-2610f392805c": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "d31cbc52-dfbb-4cf4-9274-2610f392805c",
    description:
      "Your written communication is concise and clear. You document not only the narrow projects you are working on but also larger initiatives, and you make sure the right people have the right context.",
  },
  "293f117a-10d2-4d7c-b2b3-d301f9da55e0": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "293f117a-10d2-4d7c-b2b3-d301f9da55e0",
    description:
      "You collaborate effectively with team members in various roles within and across departments / functions. You encourage collaboration among others.",
  },
  "b7199446-3f1d-42e0-962e-9292692fa35a": {
    competency: "communicationAndEngagement",
    expectation: "advanced",
    id: "b7199446-3f1d-42e0-962e-9292692fa35a",
    description:
      "You quickly extract core issues from discussions and meetings. Your presence makes meetings more productive.",
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
      "You're an attentive and empathetic listener. You ensure that everyone you're working with gets a chance to share their thoughts and that they're heard.",
  },
  // Expert
  "768df194-ca7d-4f01-a438-e2e6d5bcfc12": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "768df194-ca7d-4f01-a438-e2e6d5bcfc12",
    description:
      "You make yourself accountable for the documentation of very large projects and processes; you are able to coordinate with others to ensure documentation gets written.",
  },
  "d6d32e1d-8471-45bc-a2c4-c553a9efbd4a": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "d6d32e1d-8471-45bc-a2c4-c553a9efbd4a",
    description:
      "Your documentation ensures that systems/processes can be maintained or built upon by people who were not originally involved in building them.",
  },
  "3c0e5a2b-cc34-47cf-a022-6073c7b98107": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "3c0e5a2b-cc34-47cf-a022-6073c7b98107",
    description:
      "You help disparate groups of people collaborate, identify common goals, and reach consensus. Your facilitation skills keep conversations productive and respectful.",
  },
  "3acfaee0-5dbf-4848-bf8a-a65a97c2b843": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "3acfaee0-5dbf-4848-bf8a-a65a97c2b843",
    description:
      "Others turn to you for help giving difficult feedback. Others often seek out your advice on matters involving communication.",
  },
  "cee79a9e-0c06-469e-a893-2bc11634c16f": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "cee79a9e-0c06-469e-a893-2bc11634c16f",
    description:
      "You adapt your language to meet the needs of various audiences. Others seek you out because you're approachable, respectful, and they know they will learn from you.",
  },
  "7aa7f868-ab76-489e-8037-7733ed1fd768": {
    competency: "communicationAndEngagement",
    expectation: "expert",
    id: "7aa7f868-ab76-489e-8037-7733ed1fd768",
    description:
      "You not only practice mindful communication and active listening in your interactions but encourage these practices in others.",
  },
  // Leading Expert
  "38287017-82cc-45f0-a357-334306f9fafb": {
    competency: "communicationAndEngagement",
    expectation: "leading expert",
    id: "38287017-82cc-45f0-a357-334306f9fafb",
    description:
      "You've made significant changes to how Khan Academy handles documentation, facilitation, or collaboration that has improved the functioning of the department.",
  },
  "324f76b9-4926-484e-9682-d0739612e048": {
    competency: "communicationAndEngagement",
    expectation: "leading expert",
    id: "324f76b9-4926-484e-9682-d0739612e048",
    description:
      "You create spaces and channels that improve cross-team and inter-departmental communication.",
  },
  "a677a230-6dbf-4be6-be1b-b68f89f34ca0": {
    competency: "communicationAndEngagement",
    expectation: "leading expert",
    id: "a677a230-6dbf-4be6-be1b-b68f89f34ca0",
    description:
      "Others often turn to you to make and communicate difficult decisions.",
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
      "You accept direction and guidance and are learning what traits are valuable in a leader.",
  },
  "0b9021f8-700f-40d2-ac61-0b9057a5ad88": {
    competency: "leadership",
    expectation: "beginner",
    id: "0b9021f8-700f-40d2-ac61-0b9057a5ad88",
    description:
      "You are transparent about what you do not understand and need help with, and communicate this to the appropriate parties (e.g. your manager).",
  },
  "9dc2764d-2b55-44e1-844d-af7195e92c61": {
    competency: "leadership",
    expectation: "beginner",
    id: "9dc2764d-2b55-44e1-844d-af7195e92c61",
    description: "You seek feedback often with an eye towards improving.",
  },
  // Intermediate
  "bdab95f6-ecf5-4613-b519-fb9d08d8671f": {
    competency: "leadership",
    expectation: "intermediate",
    id: "bdab95f6-ecf5-4613-b519-fb9d08d8671f",
    description: "You identify problems and propose solutions to them.",
  },
  "b9082a49-f0ed-4087-af97-0a9e365b65e1": {
    competency: "leadership",
    expectation: "intermediate",
    id: "b9082a49-f0ed-4087-af97-0a9e365b65e1",
    description: "You are self-motivated in tackling your team's projects.",
  },
  "1e76d8ae-a5f2-40f1-b41e-13ee3ee350ae": {
    competency: "leadership",
    expectation: "intermediate",
    id: "1e76d8ae-a5f2-40f1-b41e-13ee3ee350ae",
    description:
      "You seek feedback often and take actionable steps to respond to the feedback.",
  },
  "8f8fb998-1501-4440-b79a-5a18f09d2aac": {
    competency: "leadership",
    expectation: "intermediate",
    id: "8f8fb998-1501-4440-b79a-5a18f09d2aac",
    description:
      "You help create a safe environment for others to learn and grow.",
  },
  "c160dd0e-4b5d-4fea-ab0a-af5349066790": {
    competency: "leadership",
    expectation: "intermediate",
    id: "c160dd0e-4b5d-4fea-ab0a-af5349066790",
    description:
      "You take on small roles that involve indirect leadership (being a mentor, running a working group, etc).",
  },
  // Advanced
  "fd9ac750-71b5-4413-9b2b-ac1b14d1b355": {
    competency: "leadership",
    expectation: "advanced",
    id: "fd9ac750-71b5-4413-9b2b-ac1b14d1b355",
    description:
      "You take action when there is a problem without a clear owner, and you don't shy away from being the accountable party.",
  },
  "3e96b453-a395-4b6b-b8a7-2cad2c681a42": {
    competency: "leadership",
    expectation: "advanced",
    id: "3e96b453-a395-4b6b-b8a7-2cad2c681a42",
    description: "You inspire and motivate others to tackle projects.",
  },
  "a3dc0fb2-8fae-447d-8366-2865f2621aba": {
    competency: "leadership",
    expectation: "advanced",
    id: "a3dc0fb2-8fae-447d-8366-2865f2621aba",
    description:
      "You are generous with your time and foster an environment where people feel comfortable asking questions.",
  },
  "cf3e1ee9-b8de-4c77-a3f6-bb937571dae8": {
    competency: "leadership",
    expectation: "advanced",
    id: "cf3e1ee9-b8de-4c77-a3f6-bb937571dae8",
    description:
      "You are decisive, and your good business acumen are an asset to the decision making process.",
  },
  "1194b7e0-feb3-4cca-8150-58d12691de58": {
    competency: "leadership",
    expectation: "advanced",
    id: "1194b7e0-feb3-4cca-8150-58d12691de58",
    description:
      "You turn ideas and opportunities into meaningful tracks of work that can be picked up by your teammates or other teams.",
  },
  "e08e5393-b9b6-49cf-882c-634e70fc2ecf": {
    competency: "leadership",
    expectation: "advanced",
    id: "e08e5393-b9b6-49cf-882c-634e70fc2ecf",
    description:
      "You often take on roles involving direct leadership (for example, coordinating a long-term project or initiative or mentoring).",
  },
  // Expert
  "d6a9aec7-4c16-4815-9ccd-ef9fc72a930d": {
    competency: "leadership",
    expectation: "expert",
    id: "d6a9aec7-4c16-4815-9ccd-ef9fc72a930d",
    description:
      "You have successfully changed how your department functions to meet a critical need.",
  },
  "5c984812-6169-4b03-ae8b-5f2102b7a2f7": {
    competency: "leadership",
    expectation: "expert",
    id: "5c984812-6169-4b03-ae8b-5f2102b7a2f7",
    description:
      "You have a large internal network and engage with other leaders to solve problems. You have developed strong credibility throughout the company.",
  },
  "26a0e796-c06e-45ec-94e8-71f2f0e03d4e": {
    competency: "leadership",
    expectation: "expert",
    id: "26a0e796-c06e-45ec-94e8-71f2f0e03d4e",
    description:
      "You choose the most critical challenges in your path and establish yourself as a primary accountable party for Khan Academy's success in meeting these challenges.",
  },
  "8e977450-db6d-4909-8e69-b467891e35aa": {
    competency: "leadership",
    expectation: "expert",
    id: "8e977450-db6d-4909-8e69-b467891e35aa",
    description:
      "You improve the entire department by teaching others and sharing your knowledge. You create opportunities for others to showcase and develop their skills.",
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
  "0dee92a9-fe41-412b-b11d-5d73aeec870d": {
    competency: "leadership",
    expectation: "leading expert",
    id: "0dee92a9-fe41-412b-b11d-5d73aeec870d",
    description: "You make hard decisions in the face of uncertainty.",
  },
} as const;

// This allows us to extract a literal union type from fields in the array,
//   and if there's an issue, Typescript will complain when it's consumed
//   instead of here.
export type Skill = SkillSchema & (typeof Skills)[keyof typeof Skills];
