'use client';
import Navbar from "@/app/components/Navbar/Navbar.lazy";
import './manual.page.css';
import dynamic from "next/dynamic";

const DocEditor = dynamic(()=> import('@/app/components/DocEditor/DocEditor'), {
    ssr: false
});

export default function Manual() {

    return (
        <div className="d-flex justify-content-center w-100 h-100 text-center">
            <Navbar></Navbar>
            <div className="manual-page">
            <DocEditor/>
            </div>
        </div>
      );
  }
