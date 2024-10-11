import Navbar from "@/app/components/Navbar/Navbar";
import "./dashboard.page.css";

export default function Dashboard() {
  // manuals and quices

  return (
    <div className="text-center dashboard-page d-flex justify-content-center">
      <Navbar />
      <div className="dashboard-card text-center h-75 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-around pt-5">
          <div className="book blue">
            <div className="book-cover text-start p-1">
              
              <p className="pt-4">Dusting</p>
            </div>
          </div>
          <div className="book red">
            <div className="book-cover text-start p-1">
            <p className="pt-4">Kitchen</p>
            </div>
          </div>
          <div className="book green">
            <div className="book-cover text-start p-1">
            <p className="pt-4">Bathroom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
