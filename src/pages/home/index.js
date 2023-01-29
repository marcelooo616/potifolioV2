import Habilidades from '../../components/Habilidades'
import Projetos from '../../components/Projetos/inde'
import SobreMim from '../../components/SobreMim'
import './Home.css'
export default function Home(){
    return (
    <div className="container-home">
        <Habilidades/>
        <Projetos/>
        <SobreMim/>
    </div>
    )
};