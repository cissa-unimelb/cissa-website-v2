import jianImage from '../assets/images/jian.jpeg'
import charlieImage from '../assets/images/zhicheng-ding.jpg'
import jamesImage from '../assets/images/james-xu.jpeg'
import kasieImage from '../assets/images/kasie.jpg'
import selenaImage from '../assets/images/selena.jpg'
import chloeImage from '../assets/images/chloe-zhang.jpg'
import jamesDImage from '../assets/images/james-dinh.png' // Png?
import ivanImage from '../assets/images/ivan-zhuang.jpg'
import jenniferImage from '../assets/images/jennifer-soo.jpg'
import bowenImage from '../assets/images/bowen-feng.jpg'
import florenceImage from '../assets/images/florence-tang.jpg'
import harrisonImage from '../assets/images/harrison-langdon.jpg' // Some have incompatible .JPG (uppercase)
import aimeeImage from '../assets/images/aimee-liang.jpg'
import amandaImage from '../assets/images/amanda-chao.jpg'

export const teams = [
  {
    name: 'Executive Team',
    members: [
      { name: 'Jian Pan', avatar: jianImage, role: 'President' },
      { name: 'Zhicheng (Charlie) Ding', avatar: charlieImage, role: 'Vice President' },
      { name: 'James Xu', avatar: jamesImage, role: 'Secretary '},
      { name: 'Kasie Wang', avatar: kasieImage, role: 'Education Director' },
      { name: 'Selena Lee', avatar: selenaImage, role: 'Treasurer' },
      { name: 'Chloe Zhang', avatar: chloeImage, role: 'Events Director '}
    ]
  },
  {
    name: 'General Committee',
    members: [
      { name: 'James Dinh', avatar: jamesDImage, role: 'Industry Liaison' },
      { name: 'Ivan Zhuang', avatar: ivanImage, role: 'Publicity Director' },
      { name: 'Jennifer Soo', avatar: jenniferImage, role: 'Experience Director '},
      { name: 'Bowen Feng', avatar: bowenImage, role: 'IT Director' },
      { name: 'Florence Tang', avatar: florenceImage, role: 'Product Director' },
      { name: 'Harrison Langdon', avatar: harrisonImage, role: 'Hackathon Director '},
      { name: 'Aimee Lang', avatar: aimeeImage, role: 'Diversity Director' },
      { name: 'Amanda Chao', avatar: amandaImage, role: 'People & Culture Director '}
    ]
  }
]