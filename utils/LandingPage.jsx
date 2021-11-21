function LandingPage() {
  return (
    <div className="flex grid-flow-row-dense lg:grid-cols-3 sm:grid-cols-1 md:-mt-52">
      <div className="flex flex-col m-5 bg-white z-30 w-1/3 p-10">
        <h1 className="font-black text-scu_blue text-2xl">Who we are?</h1>
        <p>Smile charity Uganda we are a helping hand to those in need. We are a hand up not a hand hand out. We envision 
          holistically empowered and transformed lives through our working mechanism DESC which stands for 
          Discipleship and Evangelism, Education Support, Skilling and Crisis management.
        </p>
        <button className="button">learn more</button>
      </div>

      <div className="flex w-1/3 flex-col m-5 bg-white z-30 p-10">
        <h1 className="font-black text-scu_blue-light text-2xl ">What we do.</h1>
        <p>We reach out to those in need of a helping hand through our different programs including;</p>
        <ul>
          <li>Discipleship & Evangelism</li>
          <li>Eductaion Support</li>
          <li>Skilling</li>
          <li>Crisis care & Management</li>
        </ul>
        <button className="button">learn more</button>
      </div>

      <div className="flex flex-col w-1/3 m-5 bg-white z-30 p-10">
        <h1 className="font-black text-scu_blue-light text-2xl">How to get involved?</h1>
        <p>You too can be part of this work through praying with us, Visiting us, or donating to us.</p>
        <button className="button w-200">learn how</button>
      </div>
    </div>
  )
}

export default LandingPage
