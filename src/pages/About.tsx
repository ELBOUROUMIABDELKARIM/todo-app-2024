import { useAuthStore } from "../App";
import DevInfo from "../components/DevInfo/DevInfo";

export default function About() {

    const {logout} = useAuthStore()



    return (
        <>
            <div className="about d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">About</h2>
                        <br/>
                        <p>A simple Todo-List Application using React 18.2.</p>
                        <p>This project was bootstrapped with Vite.</p>
                        <p>Some styles (html/css) are retrieved from:</p>
                        <ul>
                            <li><a href="https://codepen.io/MarianKoniuszko/pen/g00JmaG" target="_blank" rel="noopener noreferrer">Codepen by Marian Koniuszko</a></li>
                            <li><a href="https://codepen.io/seshatan/pen/pRpmWG" target="_blank" rel="noopener noreferrer">Codepen by Seshatan</a></li>
                        </ul>
                        <br/>
                        <hr className="custom-hr" />
                        <br/>
                        <DevInfo onLogout={logout} />
                    </div>
                </div>
            </div>
        </>
    );
}
