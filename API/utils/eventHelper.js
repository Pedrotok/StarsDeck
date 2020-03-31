const EventsType = [
  "Encontro",
  "Dojo",
  "Palestra",
  "OpenSource"
];

const EventsDescription = {
  Encontro: "Participação em encontro",
  Dojo: "Participação em dojo",
  Palestra: "Apresentação de palestra",
  OpenSource: "PR em projeto open source"
};

const EventsScore = {
  Encontro: 1,
  Dojo: 2,
  Palestra: 3,
  OpenSource: 3
};

export const getEventsList = () => {
  let eventsList = [];

  for (var idx in EventsType) {
    const event = EventsType[idx];
    eventsList.push({
      type: event,
      description: EventsDescription[event],
      score: EventsScore[event]
    });
  }

  return eventsList;
};

export const getScore = (eventType) => EventsScore[eventType];