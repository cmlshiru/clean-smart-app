import Login from '../../components/Login/Login.lazy';
import "./login.page.css";


export default function Home() {
  return (
    <div className='d-flex h-100 login-page'>
        <div className="col-12">
            <div className='h-100 px-5 d-flex justify-content-end'>
                <div className='login-container my-auto'>
                    <Login/>
                </div>
            </div>
        </div>
      
    </div>
  );
}
