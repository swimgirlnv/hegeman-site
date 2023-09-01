import './events.css'

export default function Events() {

  return (
    <div className="item2" id="Events">
      <div className="calendar">
      <iframe 
      className='calendarFrame'
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=America%2FNew_York&src=Y18yOGQyZDA1MjMxYWRmYzQ1MDRhYjA3MWRkMTVlMjRlODZlZWIyM2ZmNDBkNGNmZDRmOGFmMWFkNjcyYWZiMWEwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5"       ></iframe>
      </div>
      <div className='posters'>
        <div className='poster'>
          <img className='posterImg' src='https://i.imgur.com/x29dElf.png' />
        </div>
      </div>
      
    </div>

  );
}
