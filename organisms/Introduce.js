import Image from "next/image";

export default function Introduce() {

  const getAge = () => {
    const birthday = {
      year: 1998,
      month: 1,
      date: 25
    };

    const today = new Date();
    const thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
    const age = today.getFullYear() - birthday.year;
    if(today < thisYearsBirthday){
        //今年まだ誕生日が来ていない
        age--;
    }
    return age;
  };

  return (
    <section id="introduce">
      <div data-scroll data-scroll-speed="4">
        <h2 className='contents_header'>INTRODUCE</h2>
        <div className='introduce_contents'>

          <div className='introduce_image_container'>
            <Image 
              src='/images/wankoinsoba.jpg'
              className="wankoinsoba"
              width={300}
              height={400}
              alt='わんこそば'
            />
          </div>

          <div className='introduce_text_container'>
            <p>My name is kaoru and {getAge()} years old.</p>
            <p>Working as a Software Engineer in Tokyo.</p>
            <p>I am interested in both Frontend and Backend programming languages.</p>
            <p>( Ex. Ruby on Rails, React.js, Vue.js, TypeScript )</p>
          </div>
        </div>
      </div>
    </section>
  )
}
