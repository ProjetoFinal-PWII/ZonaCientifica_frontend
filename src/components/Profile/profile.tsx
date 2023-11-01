import './profile.css'
import { Header } from '../Header/header'
import picture from '../../assets/img/picture.png'

export function Profile(){
  return (
    <>
      <Header/>
      <div className='bodyProfile'>
        <div className='boxProfile'>
          <img src={picture} alt="picture" className='picture'/>
          <p className='name'>Leonardo Mendes</p>
          <p>@Leonardo</p>
        </div>
      </div>
    </>
  )
}