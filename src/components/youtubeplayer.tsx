"use client";

interface YouTubePlayerProps {
  videoId: string;
}

export default function YouTubePlayer({
  videoId,
}: YouTubePlayerProps) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Studying Tactics Lecture"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}