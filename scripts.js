document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'June 2021 - July 2022',
        title: 'Account Executive, Amazon Web Services, London, U.K.',
        description: '- Managed a portfolio of 96 Startups across the FR market. Key responsibilities included conducting discussions with C- level executives to optimize their cloud strategy. Exceeded my yearly individual revenue target by +114%. \n- Analytics & AI lead: led my team in the ideation and implementation of initiatives that would increase the deal rate of Analytics & AI services. Led numerous initiatives that increased conversion rate by 16% in 2 months. \n- Role-play academy POC: ran an EU-wide project to train new joiners on real client-facing scenarios. Grew participants from 15 in the first month to +60 participants in each quarterly session.'
    },
    {
        date: 'January 2020 - June 2021',
        title: 'Vendor Manager, Amazon, London, U.K.',
        description: 'Generated €3.6M by on-boarding and consulting my vendor portfolio across different categories in the EU, exceeding my yearly individual revenue target by +260%. Key signings include a Japanese retailer valued at €5.31 Billion. \n- Selection project lead: designed a roadmap to automate the selection creation process and conducted monthly training sessions with 5 associates, resulting in a time saving of 750 hours for Vendor Managers across the EU. \n- Home Category lead: lead the largest product category within my team of 30 Vendor Managers by spearheading onboarding, selection creation and process-improvement sprints. These resulted in €12.5M in Revenue (+7.2% vs plan) and 182.5k created products (+151% vs plan). Wrote and presented 6-pager Monthly Business Reviews to senior management.'
    },
    {
        date: 'January - July 2018',
        title: 'Retail Business Development Intern, Munich, Germany',
        description: '- Created and provided the BMW i online store KPI reporting to the Dutch, Spanish, Italian and Austrian market on a monthly basis, using Adobe Analytics.\n- Filmed/edited a video highlighting the “Agile” Transformation of my department. The video was one of the 5 winners in a BMW worldwide competition. \n- Created a Jira and Confluence page for a company-wide project called “Boost electric” with the aim of adopting the “Agile” working method.'
    },
    {
        date: 'September - February 2017',
        title: 'Retail Business Development Intern, Munich, Germany',
        description: ' Collected and analysed statistical, financial and customer data from the US, Canada, Australia and China in order to tailor the business strategies of our clients - in collaboration with the Greek Ministry of Foreign Affairs.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
