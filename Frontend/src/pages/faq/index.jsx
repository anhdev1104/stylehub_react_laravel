import { useEffect, useState } from 'react';
import Accordion from './components/Accordion';

const FAQ = [
  {
    id: 1,
    question: 'What is your products ?',
    answer:
      'We provide hig quality fashion products. Customers can find fashion products based on age and from hig-end to affordable products.',
  },
  {
    id: 2,
    question: 'How to order ?',
    answer:
      'Ordering online through our website is the simplest and fastest way. Just select the products, add to cart, and proceed to checkout. Or you can also contact us directly via our consulting phone to place an order.',
  },
  {
    id: 3,
    question: 'How to check my order status ?',
    answer:
      'You can check the status of your prder by logging into your account on the website or contacting our customer support.',
  },
  {
    id: 4,
    question: 'What payment methods do you accept ?',
    answer: 'We accept payments via credit cards, debit cards, PayPal and bank transfers.',
  },
  {
    id: 5,
    question: 'Do you have a return policy ?',
    answer:
      'Yes, we have a flexible return policy. If you are not satisfied with your product, you can return it or receive a refund within a certain period if time. Please read our return policy carefully for more detailed information.',
  },
];

const FaqPage = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(FAQ);
  }, []);

  return (
    <main className="container-page">
      <div className="py-[100px] px-[150px] max-lg:px-[50px] max-sm:px-1">
        <h2 className="section-heading section-heading-1 text-center max-md:text-[40px]">Most asked questions about us</h2>

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
