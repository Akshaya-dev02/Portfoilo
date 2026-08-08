// Add Event
const addEventForm = document.getElementById('addEventForm');
if (addEventForm) {
  addEventForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;

    const res = await fetch('/event-api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date, location })
    });

    const data = await res.json();
    alert(data.message);
    addEventForm.reset();
    loadEvents();
  });
}

// Load Events
async function loadEvents() {
  const res = await fetch('/event-api/events');
  const events = await res.json();
  const eventsList = document.getElementById('eventsList');
  if (!eventsList) return;
  eventsList.innerHTML = '';
  events.forEach(e => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `<h3>${e.title}</h3>
                      <p>Date: ${e.date}</p>
                      <p>Location: ${e.location}</p>`;
    eventsList.appendChild(card);
  });
}

if (document.getElementById('eventsList')) {
  loadEvents();
}
