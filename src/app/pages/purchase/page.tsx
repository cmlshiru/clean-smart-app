'use client';
import Navbar from "@/app/components/Navbar/Navbar.lazy";
import "./purchase.page.css";
import DocEditor from '../../components/DocEditor/DocEditor';

export default function Purchase() {

  return (
    <div className="d-flex justify-content-center w-100 h-100 text-center">
        <Navbar></Navbar>
        <DocEditor></DocEditor>
    </div>
  );
}
