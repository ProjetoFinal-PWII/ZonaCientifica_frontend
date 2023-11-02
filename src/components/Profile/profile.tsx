import './profile.css'
import { Header } from '../Header/header'
import picture from '../../assets/img/picture.png'
import edit from '../../assets/img/edit.png'
import instagram from '../../assets/img/Instagram.png'
import twitter from '../../assets/img/Twitter.png'
import facebook from '../../assets/img/Facebook.png'
import likedin from '../../assets/img/LikedIn.png'

export function Profile(){
  return (
    <>
      <Header/>
      <div className='bodyProfile'>
        <div className='boxProfile'>
          <img src={picture} alt="picture" className='picture'/>
          <p className='name'>Leonardo Mendes</p>
          <p>@Leonardo</p>
          <img src={edit} alt="edit" className='edit'/>
        </div>
        <div className="boxContact">
          <p>Contato</p>
          <p>88 9 96647341</p>
          <p>mendes.leonardo@academico.com</p>
        </div>
        <div className='boxIcons'>
          <img src={instagram} alt="instagram" className='icons'/>
          <img src={twitter} alt="twitter" className='icons'/>
          <img src={facebook} alt="facebook" className='icons'/>
          <img src={likedin} alt="likedIn" className='icons'/>
        </div>
        <div className='boxButtons'>
          <button>Favoritos</button>
          <button>Participando</button>
        </div>
      </div>
    </>
  )
}