import { CorePostFields } from "types/CorePostFields";

const article = `
<p><span data-preserver-spaces="true">A dedicated development team is a collaborative business model where a business owner outsources a project to a development team. The hired team of developers works on your project(s), ensuring all your requirements and business needs are met. Working with development teams builds a long-lasting relationship, fostering team cohesion and understanding.</span></p>
<p><span data-preserver-spaces="true">This article discusses the benefits of dedicated development teams to your business, the value they bring to the table, why this collaborative model works and the difference between dedicated development teams and team extension/ augmentation.</span></p>
<p><span data-preserver-spaces="true">&nbsp;&nbsp;</span></p>
<h2><span data-preserver-spaces="true">What is a dedicated development team?</span></h2>
<p><span data-preserver-spaces="true">A dedicated team is an approach to software delivery. The idea behind it is to hire a group of skilled developers who can work on your project as your team members, manage, and direct them to a certain extent. You can take advantage of their expertise, share some workload with them, and enjoy working without extra stress on you.</span></p>
<p><span data-preserver-spaces="true">This eliminates the need to employ and train in-house specialists while giving you rapid access to talent. In addition, the Dedicated Team model is designed to allow you to use only the developers you need&mdash; from one to as many as your project requires.</span></p>
<p><strong><em><span data-preserver-spaces="true">'Dedicated' because this is a team focused on your project and committed to delivering high-quality results and on time. This model is proven effective whether a company is well-established or a startup</span></em><span data-preserver-spaces="true">.</span></strong></p>
<p><span data-preserver-spaces="true">You have probably come across the terms like team extension or team augmentation, dedicated team before but are they different from each other?&nbsp;</span><strong><span data-preserver-spaces="true">Short answer- Yes</span></strong><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true">Team extension is hiring specific expertise or a development team to work with an in-house team for the duration of a project.&nbsp;</span><strong><span data-preserver-spaces="true">The main benefit</span></strong><span data-preserver-spaces="true">&nbsp;of team extension is for companies to save time picking experience by outsourcing projects to temporary workers.</span></p>
<p><span data-preserver-spaces="true">&nbsp;&nbsp;</span></p>
<h2><span data-preserver-spaces="true">Now, what is the difference between a dedicated team and team extension?</span></h2>
<p><span data-preserver-spaces="true">These terms are often used synonymously. Team extension is an advanced version of the dedicated development team. <strong>The primary difference</strong> is that the development team handles the end-to-end development of any project(s).</span></p>
<p><span data-preserver-spaces="true">In contrast, team extension takes advantage of a company's expertise, hires specific skills or a whole team, and augments their in-house staff. This is an excellent option if you want to scale your development team.&nbsp;</span></p>
<p><span data-preserver-spaces="true">The practice of dedicated teams has evolved into a team extension model, where a whole development team is hired to work as an in house team or augmented to scale a current in house team.</span></p>
<p><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true"><strong>What exists today is a dedicated development team extension model</strong>. The idea is to quickly improve the speed, effectiveness and quality of application development and development teams.</span></p>
<p><span data-preserver-spaces="true">&nbsp;</span></p>
<h2><span data-preserver-spaces="true">Who makes up a dedicated development team?</span></h2>
<p><span data-preserver-spaces="true"><img style="display: block; margin-left: auto; margin-right: auto;" title="programmer-g6eb9c89bc_640.png" src="https://sytbuildr.s3.eu-west-2.amazonaws.com/blog/jBO9Go3iNmT3jfo3JRxv8kmqS0wtZfWpZb6tXRL9.png" alt="a man programming" width="70%" height="42%" /><br /></span></p>
<h3><span data-preserver-spaces="true">Here is a list of specialists in a dedicated team and their roles:</span></h3>
<p><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><strong>Full-stack Developer</strong> - Front end and back end developers: The frontend developer builds the client and the backend developer builds server side of a project</span></p>
<p><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><strong>Product Designer</strong>: Create and develop a solution that meets user experience demands</span></p>
<p><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><strong>DevOps Engineer</strong>: Harmonise the development, operations and testing phases</span></p>
<p><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><strong>QA and Testing Engineer</strong>: ensures the delivery of error-free software</span></p>
<p><strong>Business Analyst</strong>: Analyse user data, analytics, and project requirements and provide recommendations</p>
<p><strong>Project Manager</strong>: Serve as a liaison between the client and the developers. They plan, manage, monitor progress, and mitigate project risks.<br /><br /></p>
<h2><span data-preserver-spaces="true">When to Hire a dedicated development team?<br /><img style="display: block; margin-left: auto; margin-right: auto;" title="group-of-people-g19fbf0b74_640.jpg" src="https://sytbuildr.s3.eu-west-2.amazonaws.com/blog/KNrsZW9SEUNEwqhwuL1wdV4HdsClDlIAO25MNXho.jpg" alt="A team collaborating " width="70%" height="42%" /><br /></span></h2>
<p><span data-preserver-spaces="true">A dedicated team is a team hired by you for you. You can select the members, manage their performance, and make changes without spending your time on recruiting and training new developers.</span></p>
<p><span data-preserver-spaces="true">They are experts in what they do and could provide support to solve issues as they come up. Once your project is in good hands, you can focus on achieving your business goals and planning the next steps.&nbsp;&nbsp;</span></p>
<p><span data-preserver-spaces="true"><a href="https://www.influencive.com/top-benefits-of-dedicated-development-team-for-business/" target="_blank" rel="noopener">With a dedicated team</a>, you have a direct line of communication with the project manager, who is in charge of the group, and you'll be notified when project goals are met.</span><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true"><strong>When you need to scale your team:</strong> A dedicated development team, having worked on a variety of projects involving different technologies, tools, and development styles, this experience helps them identify the critical requirements of a particular project and, accordingly, find developers with proven expertise.<br /><br /></span><span data-preserver-spaces="true"><strong>Tight deadline to meet</strong>: With specialists handling project work, deadlines and goals are met efficiently. With the help of an experienced team, you can maintain consistent performance for years to come.<br /><br /></span><span data-preserver-spaces="true"><strong>Long term development project</strong>: The process of scaling the teams up and down and adding updates becomes an ongoing task as organisations grow. Having a dedicated team makes this process easy and seamless.</span></p>
<p><span data-preserver-spaces="true">&nbsp;&nbsp;</span></p>
<h2><span data-preserver-spaces="true">Why does the dedicated development in the team extension model work?<br /><br /></span></h2>
<ul>
<li><span data-preserver-spaces="true">Team loyalty<br /><br /></span></li>
<li><span data-preserver-spaces="true">High flexibility,<br /><br /></span></li>
<li><span data-preserver-spaces="true">Access to niche skills&nbsp;<br /><br /></span></li>
<li><span data-preserver-spaces="true">Long term partnerships.&nbsp;<br /><br /><br /></span></li>
</ul>
<h2><span data-preserver-spaces="true">The reality of hiring a dedicated team is seen in the value that it delivers to businesses: They are:&nbsp; &nbsp;&nbsp;<br /><br /></span></h2>
<ul>
<li><span data-preserver-spaces="true">Defined budget<br /><br /></span></li>
<li><span data-preserver-spaces="true">Flexibility with requirement change<br /><br /></span></li>
<li><span data-preserver-spaces="true">Complete control over the management of the team<br /><br /></span></li>
<li><span data-preserver-spaces="true">Team members deeply understand the project and business goals of their clients.<br /><br /></span></li>
<li><span data-preserver-spaces="true">Direct line of communication.<br /><br /></span></li>
<li><span data-preserver-spaces="true">The team is stable and is fully dedicated to the particular client.</span></li>
</ul>
<p><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true">At Wazobia Tech, we deliver this service to our clients using the best possible software methodology and software development best practices, <a href="https://wazobia.tech/contact-wazobiatech">ensuring that the highest quality product is offered based on our clients' requirements.</a></span></p>
<p><span data-preserver-spaces="true">We take your whole project from ideation to deployment, and our software maintenance comes with the services we provide. So let us work on your project together.</span></p>
<p><span data-preserver-spaces="true">&nbsp;</span></p>
`;

const corePost = {
  __typename: "bnsb",
  id: "xnzbjk",
  uuid: "623bdd",
  slug: "",
  content: article,
  status: 1,
  featured_image: null,
  title: "The Ultimate Habit Tracker Guide: Why and How to Track Your Habits",
  author_uuid: null,
  language_attr: null,
  category_name: null,
  created_at: "2018-03-15 07:14:23",
  updated_at: "28/02/21",
  category: null,
  tags: [
    { id: "1", name: "Glutten-free" },
    { id: "2", name: "Habit" },
    { id: "3", name: "Guide" },
  ],
};

export const articleData: CorePostFields = {
  ...corePost,
  related_posts: [{ ...corePost }, { ...corePost }, { ...corePost }],
};
