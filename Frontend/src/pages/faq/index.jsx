import axios from 'axios';
import { useEffect, useState } from 'react';

const FaqPage = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/FAQ');
        setFaq(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFaq();
  }, []);

  const toggleContent = id => {
    setFaq(prevFaq => {
      console.log('🚀 ~ toggleContent ~ prevFaq:', prevFaq);
      return prevFaq.map(item => (item.id === id ? { ...item, showContent: !item.showContent } : item));
    });
  };

  return (
    <main className="container-page">
      <div className="py-[100px] px-[150px]">
        <h2 className="section-heading section-heading-1 text-center">Most asked questions about us</h2>
        <div className="mt-[55px]">
          {faq.map(item => (
            <div className="relative p-[30px] border border-[green] bg-white faq-container mb-[23px]" key={item.id}>
              <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-medium leading-[1.45]">{item.question}</h3>
                <button
                  className="font-medium leading-[1.45] w-[46px] h-[46px] relative bg-white border border-green text-[32px] flex items-center justify-center faq-container__btn"
                  onClick={() => toggleContent(item.id)}
                >
                  {item.showContent ? '-' : '+'}
                </button>
              </div>
              {item.showContent && <p className="w-[65%] mt-[10px] text-lg">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
