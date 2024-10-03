import sessionsData from "../../constants/data/sessions.data";

const Events = () => {
  return (
    <div>
      <h1>Our Past Events</h1>
      <div className="flex flex-wrap w-full">
        {sessionsData.map((session) => (
          <div
            key={session.title}
            className="card shadow h-[450px] w-auto p-10 mb-5"
          >
            <img
              src={session.flyer}
              alt={session.title}
              className="h-[250px]"
            />
            <h2>{session.title}</h2>
            <p>{session.instructor}</p>
            <p>{session.date}</p>
            <p>{session.time}</p>
            <a href={session?.videoURL}>Watch recorded session</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
