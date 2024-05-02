import axios from 'axios';
import { useEffect, useState } from 'react';
import AboutContent from './components/AboutContent';
import AboutMember from './components/AboutMember';

const AboutPage = () => {
  const [sectionContent, setSectionContent] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/aboutContent');
        setSectionContent(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/developers');
        setMembers(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="container-page">
      <div className="pt-[70px] pb-[150px]">
        {sectionContent.map(item => (
          <AboutContent key={item.id} data={item} />
        ))}
        <div className="mt-[150px]">
          <section className="w-[42%]">
            <h2 className="section-heading section-heading-2">MEET OUR TEAM</h2>
            <p className="mt-5 text-dark section-desc-1">
              Cosmo lacus meleifend menean diverra loremous. Nullam sit amet orci rutrum risus laoreet semper vel non
              magna. Mauris vel sem a lectus vehicula ultricies. Etiam semper sollicitudin lectus indous scelerisque.
            </p>
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
