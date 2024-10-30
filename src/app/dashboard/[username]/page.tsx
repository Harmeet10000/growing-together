
import Video from '@/components/Video';
import React from 'react'

interface Params {
  username: string;
}

const Page = async ({ params }: { params: Params }) => {
  const { username } = await params;
  const videoSrc = "https://youtu.be/m-i2JBtG4FE?si=_CjEExUxP3K-JC5e"; // Replace with your video URL
  const description = "This is a description of the video.";
  const tags = ["React", "Next.js", "JavaScript", "Tutorial"];

  const videos = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className='items mx-4' >
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 gap-10  mx-auto">
             {
               videos.map((video,i)=> (
                <Video  key={i} videoSrc={videoSrc} description={description} tags={tags} />
               ))
             }
        </div>
    </div>
  );
}

export default Page;