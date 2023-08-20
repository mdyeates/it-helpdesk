import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Welcome to your dashboard. Here you can manage and monitor all your support tickets and customer inquiries. Stay
        organized and provide excellent customer service using the tools and features available.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          We&apos;re excited to introduce our newest team member, Jane Smith, who has joined our web development team.
          Jane brings a wealth of experience and creativity to our projects. Let&apos;s give her a warm welcome!
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          We&apos;re thrilled to announce the launch of our new website! After months of hard work and dedication,
          we&apos;ve revamped our online presence to provide a better user experience. Explore our new features,
          services, and design.
        </p>
      </div>
    </main>
  );
}
