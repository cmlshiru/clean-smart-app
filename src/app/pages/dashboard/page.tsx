import Navbar from "@/app/components/Navbar/Navbar";
import "./dashboard.page.css";
import Link from "next/link";

export default function Dashboard() {
  // manuals and quices

  return (
    <div className="text-center dashboard-page d-flex justify-content-center">
      <Navbar />
      <div className="dashboard-card text-center">
        <img src="/imgs/academy.jpg" className="dashboard-img" alt="bg image"/>
        <div className="col-12 px-5 mx-5 pt-5">
          <h1 className="text-start">Manuals</h1>
        </div>
        <div className="col-12 d-flex justify-content-around pt-5">
          <div className="book blue cursor-pointer">
            <div className="book-cover text-start p-1">
              <p className="pt-4">Dusting</p>
            </div>
            <div className="book-separator"></div>
          </div>
          <div className="book red cursor-pointer">
            <div className="book-cover text-start p-1">
              <p className="pt-4">Kitchen</p>
            </div>
            <div className="book-separator"></div>
          </div>
          <div className="book green cursor-pointer">
            <div className="book-cover text-start p-1">
              <p className="pt-4">Bathroom</p>
            </div>
            <div className="book-separator"></div>
          </div>
        </div>
        <div className="col-12 px-5 mx-5 pt-5">
          <h1 className="text-start">Quizzes</h1>
        </div>
        <div className="col-12 d-flex justify-content-around py-5">
          <Link href={"quiz"}>
            <div className="paper-sheet cursor-pointer">
              <div className="paper-top d-flex justify-content-around">
                <div className="paper-hole"></div>
                <div className="paper-hole"></div>
                <div className="paper-hole"></div>
                <div className="paper-hole"></div>
              </div>
              <div className="pencil">
                <div className="pencil-eraser"></div>
                <div className="pencil-point">
                  <div className="pencil-graphit"></div>
                </div>
              </div>
              <p className="pt-4">Dusting</p>

            </div>
          </Link>

          <div className="paper-sheet cursor-pointer">
            <div className="paper-top d-flex justify-content-around">
              <div className="paper-hole"></div>
              <div className="paper-hole"></div>
              <div className="paper-hole"></div>
              <div className="paper-hole"></div>
            </div>
            <div className="pencil">
              <div className="pencil-eraser"></div>
              <div className="pencil-point">
                <div className="pencil-graphit"></div>
              </div>
            </div>
            <p className="pt-4">Kitchen</p>
          </div>
          <div className="paper-sheet cursor-pointer">
            <div className="paper-top d-flex justify-content-around">
              <div className="paper-hole"></div>
              <div className="paper-hole"></div>
              <div className="paper-hole"></div>
              <div className="paper-hole"></div>
            </div>
            <div className="pencil">
              <div className="pencil-eraser"></div>
              <div className="pencil-point">
                <div className="pencil-graphit"></div>
              </div>
            </div>
            <p className="pt-4">Bathroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
