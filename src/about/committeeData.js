import presidentImage from '../assets/images/committee/cinque.png'
import vicePresidentImage from '../assets/images/committee/kasie.png'
import secretaryImage from '../assets/images/committee/ileana.png'
import educationImage from '../assets/images/committee/kevin-z.png'
import treasurerImage from '../assets/images/committee/jennifer.png'
import eventsDirectorImage from '../assets/images/committee/kevin-w.png'
import industryLiaisonImage from '../assets/images/committee/margaret.png'
import publicityDirectorImage from '../assets/images/committee/aarushi.png'
import ITDirectorImage from '../assets/images/committee/kai.png'
import productDirectorImage from '../assets/images/committee/sean.png'
import competitionsDirectorImage from '../assets/images/committee/josh.png'
import diversityDirectorImage from '../assets/images/committee/zhen.png'
import peopleDirectorImage from '../assets/images/committee/tyana.png'

export const teams = [
  {
    name: 'Executive Team',
    members: [
      { name: 'Cinque Howells', avatar: presidentImage, role: 'President' },
      { name: 'Kasie', avatar: vicePresidentImage, role: 'Vice President' },
      { name: 'Ileana Huang', avatar: secretaryImage, role: 'Secretary '},
      { name: 'Kevin Zhou', avatar: educationImage, role: 'Education Director' },
      { name: 'Jennifer Soo', avatar: treasurerImage, role: 'Treasurer' },
      { name: 'Kevin Wu', avatar: eventsDirectorImage, role: 'Events Director '}
    ]
  },
  {
    name: 'General Committee',
    members: [
      { name: 'Margaret', avatar: industryLiaisonImage, role: 'Industry Liaison' },
      { name: 'Aarushi Dua', avatar: publicityDirectorImage, role: 'Publicity Director' },
      { name: 'Kailai Dong', avatar: ITDirectorImage, role: 'IT Director' },
      { name: 'Sean Khoo', avatar: productDirectorImage, role: 'Product Director' },
      { name: 'Josh Heng', avatar: competitionsDirectorImage, role: 'Competitions Director '},
      { name: 'Zhen', avatar: diversityDirectorImage, role: 'Diversity Director' },
      { name: 'Tyana Tsai', avatar: peopleDirectorImage, role: 'People & Culture Director '}
    ]
  }
]