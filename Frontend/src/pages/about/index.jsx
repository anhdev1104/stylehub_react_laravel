import AboutContent from './components/AboutContent';
import AboutMember from './components/AboutMember';

const sectionContent = [
  {
    id: 1,
    heading: 'WHAT WE DO',
    content:
      "We are the Daddy World team, we consist of 4 members, the team leader is Hoang Bao Trung who specializes in product design and planning for the team, the 2nd member is Bui Hoang Anh who specializes in front-end. Of the team, the third member is Nguyen Thanh Duong who is charge of the back-end for the team, And lastly, indispensable is Hoang Ha who is the team's guide.",
    image: '/assets/img/about/about1.png',
  },
  {
    id: 2,
    heading: 'WHAT WE DO',
    content:
      'We specialize in making websites products such as e-commerce platforms, MMO websites, and more. In particular, we can also integrate AI into your website.',
    image: '/assets/img/about/about2.png',
    start: true,
  },
];

const members = [
  {
    id: 1,
    fullname: 'Hoang Bao Trung',
    avatar: '/assets/img/auth/hoangbaotrung.jpg',
    major: 'Team Leader',
  },
  {
    id: 2,
    fullname: 'Bui Hoang Anh',
    avatar: '/assets/img/auth/hoanganh.jpg',
    major: 'ReactJs Master',
  },
  {
    id: 3,
    fullname: 'Nguyen Thanh Duong',
    avatar: '/assets/img/auth/nguyenthanhduong.jpg',
    major: 'Laravel Master',
  },
  {
    id: 4,
    fullname: 'Hoang Ha',
    avatar: '/assets/img/auth/venom.jpg',
    major: 'Product Manager',
  },
];

const AboutPage = () => {
  return (
    <main className="container-page">
      <div className="pt-[70px] pb-[150px]">
        {sectionContent.map(item => (
          <AboutContent key={item.id} data={item} />
        ))}
        <div className="mt-[150px]">
          <section className="w-[42%]">
            <h2 className="section-heading section-heading-2">MEET OUR TEAM</h2>
            <p className="mt-5 text-dark section-desc-1">Let&apos;s take a look at some of the team members</p>
          </section>
          <div className="grid grid-cols-4 items-center gap-[38px] mt-[70px]">
            {members.map(member => (
              <AboutMember key={member.id} data={member} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
