import Link from "next/link";

const CTA = ({theme}) => {
    // console.log(theme)
  return (
    <div className='cta'>
      <p className={theme === "dark" ? "dark-cta-text" :'cta-text'}>
        Have a project in mind? <br className='sm:block hidden' />
        Let's build something together!
      </p>
      <Link href={{
        pathname : '/contact',
        query : {theme : theme}
      }} className={theme === "dark" ? "dark-btn" :'btn'}>
        Contact
      </Link>
    </div>
  );
};

export default CTA;