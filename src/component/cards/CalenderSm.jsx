import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";

function CalenderSm() {
  return (
    <div className="flex flex-1 w-full last:ml-[5rem] h-full">
      <div className="crancy-sidebar__single w-full h-full">
        <div className="crancy-default-cd">
          <FullCalendar
            selectable={true}
            plugins={[daygridPlugin]}
            views={["dayGridDay"]}
            headerToolbar={{
              start: "title",
              end: "prev next",
            }}
            initialDate={new Date()} // using new Date(); and set your scheduled on event array
            businessHours={true} // display business hours
            editable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default CalenderSm;
