const Videos = () => {
  // Add your YouTube videos here
  // To get thumbnail: Use https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
  // Example: If your video URL is youtube.com/watch?v=dQw4w9WgXcQ
  // Then VIDEO_ID is: dQw4w9WgXcQ
  // And thumbnail is: https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg

  const videos = [
    {
      id: 1,
      title: "Video Title Here",
      date: "December 2024",
      description: "Description of your video project",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg", // Replace VIDEO_ID
      url: "https://youtube.com/watch?v=VIDEO_ID", // Replace VIDEO_ID
    },
    {
      id: 2,
      title: "Another Video",
      date: "November 2024",
      description: "Another video description",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
      url: "https://youtube.com/watch?v=VIDEO_ID",
    },
    // Add more videos by copying the format above
  ];

  return (
    <div className="space-y-1">
      {videos.map((video, index) => (
        <div key={video.id}>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-6 group"
          >
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <h3 className="text-base font-medium group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                  {video.title}
                </h3>
                <span className="text-xs text-neutral-400 dark:text-neutral-600">
                  {video.date}
                </span>
              </div>
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 overflow-hidden max-w-2xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {video.description}
              </p>
            </div>
          </a>
          {index < videos.length - 1 && (
            <hr className="border-neutral-200 dark:border-neutral-800" />
          )}
        </div>
      ))}

      <div className="pt-12">
        <a
          href="https://youtube.com/@yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
        >
          Watch more on YouTube →
        </a>
      </div>
    </div>
  );
};

export default Videos;
