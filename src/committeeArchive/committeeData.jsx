const executives = [
  'President',
  'Vice-President',
  'Secretary',
  'Treasurer',
  'Events Director',
  'Events Officer',
  'Education Director',
  'Education Officer',
]

const committeeData = {
  '2023/2024': [
    {
      'President': 'Cinque Howells',
    },
    {
      'Vice-President': 'Kasie Wang',
    },
    {
      'Secretary': 'Ileana Huang',
    },
    {
      'Treasurer': 'Jennifer Soo',
    },
    {
      'Education Director': 'Kevin Zhou',
    },
    {
      'Events Director': 'Kevin Wu',
    },
    {
      'Publicity Director': 'Aarushi Dua',
    },
    {
      'Industry Liaison': 'Margaret Xu',
    },
    {
      'IT Director': 'Kailai Dong',
    },
    {
      'Diversity Director': 'Zhen Liu',
    },
    {
      'Product Director': 'Sean Khoo',
    },
    {
      'Competitions Director': 'Josh Heng',
    },
    {
      'People & Culture Director': 'Tyana Tsai',
    }
  ],
  '2022/2023': [
    {
      'President': 'Jian Pan',
    },
    {
      'Vice-President': 'Zhicheng (Charlie) Ding',
    },
    {
      'Secretary': 'James Xu',
    },
    {
      'Treasurer': 'Selena Lee',
    },
    {
      'Education Director': 'Kasie Wang',
    },
    {
      'Events Director': 'Chloe Zhang',
    },
    {
      'Publicity Director': 'Ivan Zhuang',
    },
    {
      'Industry Liaison': 'James Dinh',
    },
    {
      'IT Director': 'Bowen Feng',
    },
    {
      'Student Experience Director': 'Jennifer Soo',
    },
    {
      'Diversity Director': 'Aimee Liang',
    },
    {
      'Product Director': 'Florence Tang',
    },
    {
      'Competitions Director': 'Harrison Langdon',
    },
    {
      'People & Culture Director': 'Amanda Chao',
    },
  ],
  '2021/2022': [
    {
      'President': 'Mustafa Awni',
    },
    {
      'Vice-President': 'Daniel Digby',
    },
    {
      'Secretary': 'Kyla Canares',
    },
    {
      'Treasurer': 'Jian Pan',
    },
    {
      'Education Director': 'Prashansa Singh',
    },
    {
      'Industry Liaison': 'Zhicheng (Charlie) Ding',
    },
    {
      'Publicity Director': 'Thanakon Kimsan',
    },
    {
      'Events Director': 'Thomas Robertson',
    },
    {
      'IT Director': 'Abrar Yusuf',
    },
    {
      'First Year Director': 'Kasie Wang',
    },
    {
      'Diversity Director': 'Selena Lee',
    },
    {
      'Hackathon Director': 'Zhirong (Leo) Lin',
    },
    {
      'Product Director': 'Callista Low',
    },
  ],
  '2020/2021': [
    {
      'President': 'Andy Jiang',
    },
    {
      'Vice-President': 'Betty Lin',
    },
    {
      'Secretary': 'Xue Qian',
    },
    {
      'Treasurer': 'Calvin Ho',
    },
    {
      'Education Officer': 'Andrew Shen',
    },
    {
      'Industry Liaison': 'Mustafa Awni',
    },
    {
      'Publicity Officer': 'Tiana Litchfield',
    },
    {
      'Events Officer': 'Khant (Leo) Thurein',
    },
    {
      'First Year Officer': 'Anika Madiman',
    },
    {
      'IT Officer': 'Keith Leonardo',
    },
    {
      'Diversity Officer': 'Jade Siang',
    },
  ],
  '2019/2020': [
    {
      'President': 'Peter Shi',
    },
    {
      'Vice-President': 'Angela Chan',
    },
    {
      'Secretary': 'Uvin Abeysinghe',
    },
    {
      'Treasurer': 'Eyre Mamintada',
    },
    {
      'Education Officer': 'Xue Qian',
    },
    {
      'Industry Liaison': 'Divyam Garg',
    },
    {
      'Publicity Officer': 'Kevin Yang',
    },
    {
      'Events Officer': 'Catherine Song',
    },
    {
      'First Year Officer': 'Andrew Shen',
    },
    {
      'IT Officer': 'Andy Jiang',
    },
    {
      'Diversity Officer': 'Betty Lin',
    },
  ],
  '2018/2019': [
    {
      'President': 'Jonathan Tran',
    },
    {
      'Vice-President': 'Michael Manoussakis',
    },
    {
      'Secretary': 'Raj Shee',
    },
    {
      'Treasurer': 'Daniel Sutherland',
    },
    {
      'Education Officer': 'Karl Flores',
    },
    {
      'Industry Liaison': 'Peter Shi',
    },
    {
      'Publicity Officer': 'Eyre Mamintada',
    },
    {
      'Events Officer': 'Michelle Anggana',
    },
    {
      'First Year Officer': 'Tara Co',
    },
    {
      'IT Officer': 'Daryl Wong',
    },
    {
      'Diversity Officer': 'Grace Sng',
    },
  ],
  '2017/2018': [
    {
      'President': 'Raisa Litchfield',
    },
    {
      'Vice-President': 'Ilan Rosen',
    },
    {
      'Secretary': 'Haohai (Harrison) Liu',
    },
    {
      'Treasurer': 'My Nguyen',
    },
    {
      'Education Officer': 'Sarina Moshfegh',
    },
    {
      'Industry Liaison': 'Akansha Pandey',
    },
    {
      'Publicity Officer': 'Angeline Phan',
    },
    {
      'Events Officer': 'Michelle Anggana',
    },
    {
      'Diversity Officer': 'Grace Johnson',
    },
    {
      'IT Officer': 'Stefan Sathianathen',
    },
    {
      'UX Officer': 'Palash Selot',
    },
  ],
  '2016/2017': [
    {
      'President': 'Hao Le',
    },
    {
      'Vice-President': 'Lachlan Dee',
    },
    {
      'Secretary': 'Nitin Aggarwal',
    },
    {
      'Treasurer': 'Matthew Perrott',
    },
    {
      'Education Officer': 'Daniel Ip',
    },
    {
      'Industry Liaison': 'Apoorva Kapoor',
    },
    {
      'Publicity Officer': 'Russell Sisipenzi',
    },
    {
      'Events Officer': 'Jackson Huang',
    },
    {
      'Diversity Officer': 'Grace Johnson',
    },
    {
      'IT Officer': 'Daniel Porteous',
    },
    {
      'UX Officers': 'Hui Min Yau, Yunqiu Weng',
    },
  ],
  '2015/2016': [
    {
      'President': 'Hao Le',
    },
    {
      'Vice-President': 'Lachlan Dee',
    },
    {
      'Secretary': 'Nathanial James Malishev',
    },
    {
      'Treasurer': 'Matthew Perrott',
    },
    {
      'Education Officer': 'Jonathan Villegas',
    },
    {
      'Industry Liaison': 'John Peng',
    },
    {
      'Publicity Officer': 'Veronica Torres',
    },
    {
      'Events Officer': 'Jessica Eames',
    },
    {
      'Diversity Officer': 'Elles Le',
    },
    {
      'IT Officer': 'Kimple Ke',
    },
    {
      'General Committee': 'Yogesh Angolkar',
    },
  ],
  '2014/2015': [
    {
      'President': 'Ben Gray',
    },
    {
      'Vice-President': 'Tae Noppakun Wongsrinoppakun',
    },
    {
      'Secretary': 'Jake Moxey',
    },
    {
      'Treasurer': 'Jun E Cheong',
    },
    {
      'Education Officer': 'Jerry Liu',
    },
    {
      'Industry Liaison': 'Brodie Daff',
    },
    {
      'Publicity Officer': 'Hao Le',
    },
    {
      'Events Officer': 'Emma Jamieson',
    },
    {
      'Diversity Officer': 'Faye Fan',
    },
    {
      'IT Officer': 'Kimple Ke',
    },
    {
      'General Committee': 'Christiana Yang',
    },
  ],
  '2013/2014': [
    {
      'President': 'Matthew Rossi',
    },
    {
      'Vice-President': 'Seunghwa (Brian) Kang',
    },
    {
      'Secretary': 'Avin Chadee',
    },
    {
      'Treasurer': 'Renlord Yang',
    },
    {
      'Education Officer': 'Ming Sheng Tee',
    },
    {
      'Industry Liaison': 'Ben Gray',
    },
    {
      'Events Officers': 'Ahmed Dedeche, Christiana Yang',
    },
    {
      'General Committee': 'Jun E Cheong, Jun Min Cheong',
    },
  ],
  '2012/2013': [
    {
      'President': 'Jim Smith',
    },
    {
      'Vice-President': 'Kim Bratzel',
    },
    {
      'Secretary': 'Avin Chadee',
    },
    {
      'Treasurer': 'Sindre Seppola',
    },
    {
      'Education Officer': 'Patrick Clarke',
    },
    {
      'Industry Liaison': 'Matthew Rossi',
    },
    {
      'Publicity Officer': 'Avin Chadee',
    },
    {
      'Events Officers': 'Albert Chen, Andi Sandbach',
    },
    {
      'IT Director': 'Kim Bratzel',
    },
    {
      'General Committee': 'Reinaldo Gunawan, Matt Anderson',
    },
  ],
  '2011/2012': [
    {
      'President': 'Luke Parkinson',
    },
    {
      'Vice-President': 'Reinaldo Gunawaan',
    },
    {
      'Secretary': 'Ryan Briscoe',
    },
    {
      'Treasurer': 'Anthony Tambasco',
    },
    {
      'Education Officer': 'Aidan Nagorcka-Smith',
    },
    {
      'Industry Liaison': 'Aidan Nagorcka-Smith',
    },
    {
      'Publicity Officer': 'Oliver Adams',
    },
    {
      'Events Officers': 'Kim Bratzel, Jim Smith',
    },
    {
      'IT Officers': 'Toby Davies, Adarsh Jegadccsan',
    },
    {
      'General Committee': 'Sam Pinches, Salvatore Papa, Matt Anderson',
    },
  ],
  '2010/2011': [
    {
      'President': 'Sumeet Ekbote',
    },
    {
      'Vice-President': 'Ryan Briscoe',
    },
    {
      'Secretary': 'Reinaldo Gunawan',
    },
    {
      'Treasurer': 'James Nugent',
    },
    {
      'Education Officer': 'Luke Parkinson',
    },
    {
      'Industry Liaison': 'Richard Fuller',
    },
    {
      'Publicity Officer': 'Daniel Drentin',
    },
    {
      'Events Officers': 'Reinaldo Gunawan, Anthony Tambasco',
    },
    {
      'IT Officers': 'Toby Davies, Anthony Tambasco',
    },
    {
      'General Committee': 'Jarred Willett, Lex Malta, Michelle Goldsmith',
    },
  ],
  '2009/2010': [
    {
      'President': 'Scott Richie',
    },
    {
      'Vice-President': 'David Coles',
    },
    {
      'Secretary': 'Daniel Drentin',
    },
    {
      'Treasurer': 'James Nugent',
    },
    {
      'Education Officer': 'Maun Suang Boey',
    },
    {
      'Events Officers': 'Ryan Briscoe, Reinaldo Gunawan',
    },
    {
      'IT Officers': 'Richard Fuller, Anthony Tambasco',
    },
    {
      'General Committee': 'Sumeet Ekbote, Richard Fuller, Katie Gaal',
    },
  ],
}

export {executives, committeeData}