import './links.css'

export default function Links() {

  return (
    <div className="item1" id="Links">
      <div className="buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSft1SOAEudOnRge8JZsW4G-HiUCB4_lBoHu-P5WW1usMpiHqw/viewform?usp=sf_link" target='blank'>
          <div className="btn">
            <div className="slide">
              <div className="image">
                <img
                    src={'https://cdn-icons-png.flaticon.com/512/5968/5968528.png'}
                    width={50}
                    height={50}
                    alt={`Slack logo`}
                />
                </div>
                <div className={"text2"}>Anonymous Feedback Form</div>
              </div>
            </div>
        </a>

        <a href="https://groupme.com/join_group/96061953/3ZQ19k49" target='blank'>
          <div className="btn">
            <div className="slide">
              <div className="image">
                <img
                    src={'https://i.imgur.com/FAbcIXW.png'}
                    width={50}
                    height={50}
                    alt={`GroupMe logo`}
                />
                </div>
                <div className={"text2"}>Join our GroupMe!</div>
              </div>
            </div>
        </a>

        <a href="https://reslife.brown.edu/on-campus/rules#:~:text=No%20person%20may%20reside%20in,reside%20in%20Brown's%20residence%20halls.&text=Subletting%20of%20rooms%20is%20not,have%20signed%20the%20Housing%20Agreement." target='blank'>
          <div className="btn">
            <div className="slide">
              <div className="image">
                <img
                    src={'https://i.imgur.com/mmCW84e.png'}
                    width={50}
                    height={70}
                    alt={`GroupMe logo`}
                />
                </div>
                <div className={"text2"}>ResLife Policies & Rules</div>
              </div>
            </div>
        </a>
        </div>

        <div className='numbers'>
          <h1 className='numbers-title'>Important Numbers</h1>
          <div className='numbers-content'>
          <div className='number'>
              <div className='number-title'>Department of Public Safety (DPS)</div>
              <div className='number-content'>401-863-3322 (non emergency)</div>
            </div>

            <div className='number'>
              <div className='number-title'>Department of Public Safety (DPS)</div>
              <div className='number-content'>401-863-4111 (emergency)</div>
            </div>

            <div className='number'>
              <div className='number-title'>Administrator on Call (AOC)</div>
              <div className='number-content'>401-863-3322</div>
            </div>

            <div className='number'>
              <div className='number-title'>Sexual Assault Response Line</div>
              <div className='number-content'>401-863-6000</div>
            </div>

            <div className='number'>
              <div className='number-title'>Counseling and Psychological Services</div>
              <div className='number-content'>401-863-3476</div>
            </div>

            <div className='number'>
              <div className='number-title'>Health Services</div>
              <div className='number-content'>401-863-3953</div>
            </div>

            <div className='number'>
              <div className='number-title'>Facilities Repairs</div>
              <div className='number-content'>401-863-7800</div>
            </div>

            <div className='number'>
              <div className='number-title'>Office of Residential Life</div>
              <div className='number-content'>401-863-3500</div>
            </div>
          </div>
        </div>
      
    </div>

  );
}
