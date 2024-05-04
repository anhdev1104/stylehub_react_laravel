import Accordion from './components/Accordion';

const FaqPage = () => {
  return (
    <main className="container-page">
      <div className="py-[100px] px-[150px]">
        <h2 className="section-heading section-heading-1 text-center">Most asked questions about us</h2>

        <div className="mt-[55px]">
          <Accordion heading="What kind of job can I get after the program?">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia corporis unde quos in nihil exercitationem
            id, iste rem, vitae odit architecto sequi ex dolorum repudiandae, molestias consequuntur nobis ut
            cupiditate!
          </Accordion>
          <Accordion heading="Do I get a certificate at the end?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, nobis unde excepturi laboriosam
            laudantium ratione explicabo a voluptas. Incidunt adipisci quia soluta ex officia. Quisquam eius obcaecati
            recusandae architecto illum.
          </Accordion>
          <Accordion heading="What kind of job can I get after the program?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, nobis unde excepturi laboriosam
            laudantium ratione explicabo a voluptas. Incidunt adipisci quia soluta ex officia. Quisquam eius obcaecati
            recusandae architecto illum.
          </Accordion>
          <Accordion heading="How long does the program take to complete?">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, nobis unde excepturi laboriosam
            laudantium ratione explicabo a voluptas. Incidunt adipisci quia soluta ex officia. Quisquam eius obcaecati
            recusandae architecto illum.
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
