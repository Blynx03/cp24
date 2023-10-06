import React from 'react'
import './chat.css'

const Chat = () => {
  const chatData = [
    {
      user: `Alice`,
      chat: `Hey, folks! Prepare yourselves for a laugh riot because I heard we've got some knee-slapping jokes to share.`
    },
    {
      user: `Bob`,
      chat: `Hey, Alice! Laughter is the best medicine. Let's dive into this humor extravaganza!`
    },
    { 
      user: `Charlie`,
      chat: `Hold on, everyone! It's time for the Pun Olympics. Get ready to groan and giggle simultaneously.`
    },
    { 
      user: 'David',
      chat: `My pun game is so strong; it bench-presses dad jokes.`
    },  
    {  
      user: `Emma`,
      chat: `I've been practicing my puns, but I'm still trying to find the right "pun"-ishment for bad humor.`
    },  
    {  
      user: 'Fiona',
      chat: `I'm so excited; I've got my "punny" bone ready!`
    },  
    {  
      user: 'George',
      chat: `You know it's a good joke when you can feel your soul leave your body from laughing too hard.`
    },  
    {  
      user: 'Hannah',
      chat: `The puns are like our town's secret weapon against the seriousness of life.`
    },  
    {  
      user: 'Isabel',
      chat: `But wait, there's more! It's the Stand-Up Comedy Showdown, where we turn everyday life into comedic gold.`
    },  
    {  
      user: 'Jack',
      chat: `Ah, yes, the perfect place to pretend we're all comedians, even though our day jobs are anything but funny.`
    },  
    {  
      user: 'Kate',
      chat: `And we'll have a blast making fun of ourselves and our inability to parallel park.`
    },  
    {  
      user: 'Liam',
      chat: `Remember, if you trip on your way to the stage, it's not a mistake; it's physical comedy.`
    },  
    {  
      user: 'Mia',
      chat: `And let's not forget the "trying not to laugh" challenge in the front row. You'll lose.`
    },  
    {  
      user: 'Nathan',
      chat: `Hey, comedy lovers! Did you hear about the Great Prank War? It's where we unleash our inner pranksters.`
    },  
    {  
      user: 'Olivia',
      chat: `It's all fun and games until someone gets a whoopee cushion in their office chair.`
    },  
    {  
      user: 'Paul',
      chat: `I'm all in! My prank radar is sharper than a rubber chicken's beak.`
    },  
    {  
      user: 'Quinn',
      chat: `Do we have to be professional pranksters to participate?`
    },  
    {  
      user: 'Nathan',
      chat: `Not at all! It's open to everyone. You can prank, laugh, or even just spectate and enjoy the chaos.`
    },  
    {  
      user: 'Rachel',
      chat: `That's fantastic. I've got a rubber chicken with your name on it, Paul!`
    },  
    {  
      user: 'Paul',
      chat: `You're on, Rachel! Pranks are like our town's secret handshake.`
    },  
    {  
      user: 'Sophie',
      chat: `Hold onto your disguises, folks! It's Spy School, where we learn to be masters of espionage.`
    },  
    {  
      user: 'Tyler',
      chat: `It's like a game of hide-and-seek with secret handshakes and invisible ink.`
    },  
    {  
      user: 'Ursula',
      chat: `And if you can't find the secret meeting place, you're probably in the right spot.`
    },  
    {  
      user: 'Vincent',
      chat: `Plus, we all get to practice our spy faces - a mix of intrigue and mild confusion.`
    },  
    {  
      user: 'Wendy',
      chat: `And don't forget the gadget workshop, where we learn to turn household items into high-tech spy gear.`
    },  
    {  
      user: 'Xander',
      chat: `Get ready for the Clown Convention, where we transform into slapstick comedians.`
    },  
    {  
      user: 'Yara',
      chat: `They'll teach us how to juggle, do pratfalls, and apply the perfect clown makeup.`
    },  
    {  
      user: 'Zoe',
      chat: `I'm all about going red-nosed! I've been practicing my clumsy trips and exaggerated sneezes.`
    },  
    {  
      user: 'Aaron',
      chat: `We'll be the neighborhood jesters. People will laugh, and we'll laugh with them, even though we have no idea what's happening.`
    },  
    {  
      user: 'Yara',
      chat: `And we'll pretend our giant shoes were a well-thought-out fashion choice.`
    },  
    {  
      user: 'Bella',
      chat: `Clowning around isn't enough; it's time for the Jester Jamboree. We'll jest our way to glory!`
    },  
    {  
      user: 'Carlos',
      chat: `It's a competition of wit and whimsy, where laughter is the ultimate currency.`
    },  
    {  
      user: 'Dylan',
      chat: `And we'll laugh so hard that we'll forget our own jokes and start laughing at the laughter.`
    },  
    {  
      user: 'Ella',
      chat: `I'm excited to see who'll be crowned the town's official Jester Supreme.`
    },  
    {  
      user: 'Felix',
      chat: `And let's not forget the "pie in the face" finale. We'll be wiping whipped cream out of our hair for weeks.`
    },  
    {  
      user: 'Grace',
      chat: `Hey, comedy aficionados! Did you hear about the Hilarious Talent Show? It's where we showcase our unique talents, no matter how strange.`
    },  
    {  
      user: 'Henry',
      chat: `It's like America's Got Talent but with a lot more rubber chickens and kazoo solos.`
    },  
    {  
      user: 'Isaac',
      chat: `We'll bring our quirkiest acts and make the audience laugh, cry, and question reality.`
    },  
    {  
      user: 'Julia',
      chat: `And if someone performs a dramatic reading of the phone book, we'll applaud them like they just won an Oscar.`
    },  
    {  
      user: 'Kai',
      chat: `But the best part is the surprise appearance by the town's least known superhero, Captain Awkward.`
    },  
    {  
      user: 'Mason',
      chat: `It's time for the Comedy Karaoke Night, where we take our favorite songs and turn them into hilariously altered lyrics.`
    },  
    {  
      user: 'Nora',
      chat: `We'll sing classics like "Bohemian Rhapsody" with lyrics about pizza and "I Will Survive" with verses about surviving office meetings.`
    },  
    {  
      user: 'Oliver',
      chat: `And if we forget the words, we'll just make up gibberish and pretend it's avant-garde performance art.`
    },  
    {  
      user: 'Penelope',
      chat: `But deep down, we'll secretly hope that the audience appreciates our tone-deaf serenades and spontaneous interpretive dances.`
    },  
    {  
      user: 'Quincy',
      chat: `Remember, it's all about having fun and embracing the joy of making a fool of ourselves.`
    },  
    {  
      user: 'Rachel',
      chat: `Let's wrap things up with the Silly Science Fair, where we turn complex experiments into goofy endeavors.`
    },  
    {  
      user: 'Sam',
      chat: `We'll create volcanoes that erupt with chocolate sauce and conduct experiments to see if rubber chickens can defy gravity.`
    },  
    {  
      user: 'Sophia',
      chat: `And we'll present our findings with serious faces while trying not to burst into fits of giggles.`
    },  
    {  
      user: 'Thomas',
      chat: `But the best part is the "safety goggles as fashion accessories" trend that emerges.`
    },  
    {  
      user: 'Ursula',
      chat: `Silly Science Fair: Where laughter and learning collide in a cloud of baking soda and vinegar.`
    },  
    {  
      user: 'Victoria',
      chat: `What a blast, everyone! Remember, laughter is the glue that holds our hilarious community together.`
    },  
    {  
      user: 'William',
      chat: `So true, Victoria! And no matter how silly or absurd our jokes and events may be, they create lasting memories and bonds.`
    },  
    {  
      user: 'Xena',
      chat: `Here's to our town's unique sense of humor and the joy it brings to our lives.`
    },  
    {  
      user: 'Yasmine',
      chat: `Cheers to the endless laughter and the reminder that sometimes, the silliest moments are the most cherished.`
    },  
    {  
      user: 'Zach',
      chat: `Our community is proof that humor is a universal language, and we're all fluent in laughter.`
    },  
    {  
      user: 'Alice',
      chat: `And with that, let's keep the laughter rolling in our community!`
    }
  ]

  // function showChat() {
  //   let chatContent = chatData.forEach(({user, chat}) => {
  //     setInterval(() => {
  //       return ({
  //         <div className='user'>{user}:</div>
  //         <span className='chat-span'>{chat}</span>
  //      })
  //     }, 5)
      
  //   }
  // }

  return (
    <div className='chat-container'>
      <div className='chat-content'>
        {chatData.map(({user, chat}, index) =>
          (
            <>
              <div className='user-chat-container'>
                <div className='user' style={{color: index % 2 === 0 ? 'tomato' : 'cornflowerblue'}} key={index}>{user}:</div>
                <span className='chat-span'>{chat}</span>
              </div>
            </>
          )
        )}
      </div>
    </div>
  )
}

export default Chat