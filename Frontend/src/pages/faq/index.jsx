import { useEffect, useState } from 'react';
import Accordion from './components/Accordion';

const FAQ = [
  {
    id: 1,
    question: 'What kind of job can I get after the program?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem hic aliquam sit enim incidunt consectetur voluptas? Laborum, enim non.',
  },
  {
    id: 2,
    question: 'Do I get a certificate at the end?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem hic aliquam sit enim incidunt consectetur voluptas? Laborum, enim non.',
  },
  {
    id: 3,
    question: 'What kind of job can I get after the program?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem hic aliquam sit enim incidunt consectetur voluptas? Laborum, enim non.',
  },
  {
    id: 4,
    question: 'How long does the program take to complete?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem hic aliquam sit enim incidunt consectetur voluptas? Laborum, enim non.',
  },
];

const FaqPage = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(FAQ);
  }, []);

  return (
    <main className="container-page">
      <div className="py-[100px] px-[150px]">
        <h2 className="section-heading section-heading-1 text-center">Most asked questions about us</h2>

        <div className="mt-[55px]">
          {faq.map(item => (
            <Accordion heading={item.question} key={item.id}>
              {item.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
