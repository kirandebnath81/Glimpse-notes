import { v4 } from "uuid";

const notes = [
  {
    title: "Steve Jobs Quote",
    content:
      "Remembering that I will be dead soon is the most important tool I’ve ever encountered to help me make the big choices in life. Because almost everything all external expectations, all pride, all fear of embarrassment or failure, these things just fall away in the face of death, leaving what is only truly important.",
    tags: [{ tag: "quotes", id: v4() }],
    color: "#cce0ff",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/12/22 2.55 PM",
    createdTime: new Date("Sat Dec 10 2022 14:55:22").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "Elon Musk Quote",
    content:
      " I think it is possible for ordinary people to choose to be extraordinary.",
    tags: [{ tag: "quotes", id: v4() }],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "10/12/22 3.02 PM",
    createdTime: new Date("Sat Dec 10 2022 15:02:22").getTime(),
    editedTime: null,
    id: v4(),
  },
];

export default notes;
