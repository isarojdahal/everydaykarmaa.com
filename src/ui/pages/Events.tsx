import sessionsData from "../../constants/data/sessions.data";

const Events = () => {
  return (
    <div>
      <h1>Our Past Events</h1>
      <div className="flex flex-start">
        {sessionsData.map((session) => (
          <div key={session.title} className="card">
            <img src={session.flyer} alt={session.title} />
            <h2>{session.title}</h2>
            <p>{session.instructor}</p>
            <p>{session.date}</p>
            <p>{session.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
