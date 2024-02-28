import IMC_img from "../assets/images/imc-logo.png";
import Atlassian_img from "../assets/images/sponsors/atlassian.png";
import Commbank_img from "../assets/images/sponsors/commbank.svg";
import Churchill_img from "../assets/images/sponsors/churchill-AM.png";
import Citadel_img from "../assets/images/sponsors/citadel.png";
import Optiver_img from "../assets/images/sponsors/optiver.png";
import Coles_img from "../assets/images/sponsors/coles.png";
import Bukapalak_img from "../assets/images/sponsors/bukapalak.png";
import McGrathNicol_img from "../assets/images/sponsors/mcgrathnicol.png";
import TikTok_img from "../assets/images/sponsors/tiktok.png";
import Airwallex_img from "../assets/images/sponsors/airwallex.png";
import ANZ_img from "../assets/images/sponsors/anz.png";
import AlgoHub_img from "../assets/images/sponsors/algohub.png";
import JaneStreet_img from "../assets/images/sponsors/janestreet.png";
import REA_img from "../assets/images/sponsors/rea.png";
import Amazon_img from "../assets/images/sponsors/amazon.png";
import ACS_img from "../assets/images/sponsors/acs.png";
import ClearDynamics_img from "../assets/images/sponsors/clear-dynamics.svg";
import JDS_img from "../assets/images/sponsors/jds.png";
import Mantel_img from "../assets/images/sponsors/mantel-group.png";
import SecDim_img from "../assets/images/sponsors/secdim.png";

// Check Airwallex EOI?
const allCardsInfo = {
    "IMC Trading": {
        image: IMC_img,
        link: "https://careers.imc.com/ap/en",
        opportunities: [
            {name: "Women in Engineering Australia 2024", type: "Program", location: "Sydney", link: "https://careers.imc.com/us/en/job/4285503101/Women-in-Engineering-Australia-2024"},
            {name: "Women in Trading 2024", type: "Program", location: "Sydney", link: "https://careers.imc.com/us/en/job/4285498101/Women-In-Trading-Australia-2024"},
            {name: "Software Engineer Intern 2024/2025", type: "Internship", location: "Sydney", link: "https://careers.imc.com/us/en/job/4282957101/Software-Engineer-Intern-2024-2025"},
            {name: "Trader Intern 2023/2024", type: "Internship", location: "Sydney", link: "https://careers.imc.com/us/en/job/4282959101/Trader-Intern-2024-2025"},
            {name: "Hardware Engineer Intern 2023/2024", type: "Internship", location: "Sydney", link: "https://careers.imc.com/us/en/job/4282962101/Hardware-Engineer-Intern-2024-2025"},
            // {name: "Graduate Software Engineer 2023/2024", type: "Graduate role", location: "Sydney", link: "https://careers.imc.com/ap/en/job/REQ-02570/Graduate-Software-Engineer-2023-2024"},
            // {name: "Graduate Trader 2023/2024", type: "Graduate role", location: "Sydney", link: "https://careers.imc.com/ap/en/job/REQ-02569/Graduate-Trader-2023-2024"},
            // {name: "Graduate Quantitative Researcher 2023/2024", type: "Graduate role", location: "Sydney", link: "https://careers.imc.com/ap/en/job/REQ-02781/Graduate-Quantitative-Researcher-2023-2024"},
            // {name: "Graduate Hardware Engineer 2023/2024", type: "Graduate role", location: "Sydney", link: "https://careers.imc.com/ap/en/job/REQ-02571/Graduate-Hardware-Engineer-2023-2024"}
        ]
    },

    "Atlassian": {
        image: Atlassian_img,
        link: "https://www.atlassian.com/company/careers",
        opportunities: [
            // { name: "Software Engineer Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/c1d49778-c70d-4a7d-afc0-f21498a3758c"}, 
            // { name: "Data Science Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/be1ba776-b4c1-4b7e-b7bd-f2b408c8e9ea"}, 
            // { name: "Security Engineering / Intelligence Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/d0f1651f-c311-4a47-aa42-f47d1c2585bd"}, 
            // { name: "Machine Learning Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/55d79e5f-00f1-4c1b-afa6-8c4484187c54"}, 
            // { name: "Product Design Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/354f1c40-c89d-4491-a626-f617521c14aa"}, 
            // { name: "Content Design Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/65fa8f19-2301-40cf-a20c-f82e32c33cc7"}, 
            // { name: "Associate Product Management Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/59ecd539-8fe1-4870-b7c8-bda2443b46fb"},
            // { name: "Research Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/e2e28339-6ee3-4565-b43e-a2c5ea3ab110"},
            // { name: "Finance Data Analytics Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/26f43ad3-9a8e-4433-87eb-bb24a39207b7"},
            // { name: "Site Reliability Engineer Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/6b96ac8c-e03d-4851-85e2-251642ce31cf"},
            // { name: "Workplace Productivity Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/bd1a9c99-3184-485b-8de6-c44e356036a0"},
            // { name: "Procurement Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/f3f391e2-2795-42f3-887a-b71828fcaefc"},
            // { name: "Accounting Intern", type: "Internship", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/detail/c57325b7-f04b-4685-8bb2-7b4c02137d92"}
        ]
    },

    "Commbank": {
        image: Commbank_img,
        link: "https://www.commbank.com.au/about-us/careers/graduate-intern-programs.html",
        opportunities: [
            // { name: "Graduate Roles (Multiple Disciplines)", type: "Graduate Role", location: "Melbourne", link: "https://www.commbank.com.au/about-us/careers/graduate-recruitment-program/applications.html"}
        ]
    },

    "Churchill Asset Management": {
        image: Churchill_img,
        link: "https://www.churchillassetmanagement.com.au/",
        opportunities: [
            { name: "Macro Quant", type: "Intern/Grad", location: "Melbourne", link: "https://www.churchillassetmanagement.com.au/churchillcareers/macro-quant"}, 
            { name: "Biotech Research Analyst", type: "Intern/Grad", location: "Melbourne", link: "https://www.churchillassetmanagement.com.au/churchillcareers/biotech-research-analyst"}, 
            { name: "Tech Research Analyst", type: "Intern/Grad", location: "Melbourne", link: "https://www.churchillassetmanagement.com.au/churchillcareers/tech-research-analyst"}
        ]
    },

    "Citadel Securities":{
        image: Citadel_img,
        link: "https://www.citadelsecurities.com/careers/",
        opportunities: [
            // { name: "Software Engineer Intern", type: "Internship", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/software-engineer-intern-australia/"},
            // { name: "Quantitative Research Intern", type: "Internship", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/quantitative-research-intern-australia/"},     
            // { name: "Trader Intern", type: "Internship", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/trader-intern-australia/"},
            // { name: "Site Reliability Engineer Intern", type: "Internship", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/site-reliability-engineer-intern-australia/"},
            // { name: "Software Engineer", type: "Graduate role", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/software-engineer-full-time-australia/"},
            // { name: "Quantitative Research", type: "Graduate role", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/quantitative-research-full-time-australia/"},      
            // { name: "Trader", type: "Graduate role", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/trader-full-time-australia/"},
            // { name: "Site Reliability Engineer", type: "Graduate role", location: "Sydney", link: "https://www.citadelsecurities.com/careers/details/site-reliability-engineer-full-time-australia/"}
        ]
    },

    "Optiver":{
        image: Optiver_img,
        link: "https://optiver.com/working-at-optiver/career-opportunities/",
        opportunities: [
            // { name: "Software Developer Internship 2023/2024", type: "Internship", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6597747002/"},
            // { name: "Quantitative Trading Internship 2023/2024", type: "Internship", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6602287002/"}, 
            // { name: "Quantitative Researcher Internship 2023/2024", type: "Internship", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6602288002/"},       
            // { name: "FPGA Developer Internship 2023/2024", type: "Internship", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6599787002/"},
            // { name: "Graduate Software Developer 2023 or 2024", type: "Graduate role", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6597743002/"},        
            // { name: "Graduate Quantitative Trader 2023 or 2024", type: "Graduate role", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6597706002/"},       
            // { name: "Graduate Quantitative Researcher 2023 or 2024", type: "Graduate role", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6597683002/"},   
            // { name: "Graduate FPGA Developer 2023 or 2024", type: "Graduate role", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6599786002/"},
            // { name: "Graduate Market Risk Analyst", type: "Graduate role", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6599786002/"},
            // { name: "Junior Market Risk Analyst", type: "Graduate role", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6599786002/"},
            // { name: "Postdoctoral Fellowship", type: "Graduate role", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/6599786002/"}
        ]
    },

    "Coles": {
        image: Coles_img,
        link: "https://colescareers.com.au/au/en/search-results",
        opportunities: [
            // { name: "Coles Store Support Centre (SSC) Technology Graduate Program 2024", type: "Graduate role", location: "Australia", link: "https://colescareers.com.au/au/en/grad-program-store-support-centre"}
        ]
    },

    "Bukalapak": {
        image: Bukapalak_img,
        link: "https://careers.bukalapak.com/",
        opportunities: [
            // { name: "Graduate Software Engineer", type: "Graduate role", location: "Melbourne", link: "https://www.linkedin.com/jobs/view/3426244755/?capColoOverride=true"}
        ]
    },

    "McGrathNicol": {
        image: McGrathNicol_img,
        link: "https://www.mcgrathnicol.com/careers/",
        opportunities: [
            // { name: "Summer Vacation Program, Cyber (2023/24)", type: "Internship", location: "Melbourne", link: "https://www.mcgrathnicol.com/careers-job-description/?jid=bc745c9f-b730-46b4-be84-e825470a53a11"},
            // { name: "Summer Vacation Program, Data Analytics (2023/24)", type: "Internship", location: "Melbourne", link: "https://www.mcgrathnicol.com/careers-job-description/?jid=bc745c9f-b730-46b4-be84-e825470a53a1"}
        ]
    },

    "TikTok": {
        image: TikTok_img,
        link: "https://careers.tiktok.com/",
        opportunities: [
            // { name: "Backend Software Engineer (TikTok Live) - 2023 Start", type: "Graduate Role", location: "Sydney", link: "https://careers.tiktok.com/position/7190548197362010424/detail"},     
            // { name: "Mobile Software Engineer (TikTok Live) - 2023 Start", type: "Graduate Role", location: "Sydney", link: "https://careers.tiktok.com/position/7190548125073131813/detail"},      
            // { name: "Security Engineer - Application/Product Security - 2023 Start", type: "Full-time", location: "N/A", link: "https://careers.tiktok.com/position/7222893206827911479/detail"},   
            // { name: "Product Manager (TikTok LIVE) - 2023 Start", type: "Graduate Role", location: "N/A", link: "https://careers.tiktok.com/position/7161396351031707918/detail"},
            // { name: "Product Operations Manager (TikTok LIVE) - 2023 Start", type: "Graduate Role", location: "N/A", link: "https://careers.tiktok.com/position/7161395370257598751/detail"}
        ]
    },

    "Airwallex": {
        image: Airwallex_img,
        link: "https://www.airwallex.com/careers",
        opportunities: [
            // { name: "Software Engineer Intern (2023)", type: "Internship", location: "Hybrid", link: "https://jobs.lever.co/airwallex/a478b98c-8502-4207-ab42-369b807f48f2"}
        ]
    },

    "ANZ": {
        image: ANZ_img,
        link: "",
        opportunities: []
    },

    "AlgoHub": {
        image: AlgoHub_img,
        link: "",
        opportunities: []
    },
    
    "Jane Street": {
        image: JaneStreet_img,
        link: "",
        opportunities: []
    },

    "REA Group": {
        image: REA_img,
        link: "",
        opportunities: []
    },

    "Amazon": {
        image: Amazon_img,
        link: "",
        opportunities: []
    },

    "Australian Computer Society": {
        image: ACS_img,
        link: "",
        opportunities: []
    },

    "Clear Dynamics": {
        image: ClearDynamics_img,
        link: "",
        opportunities: []
    },

    "JDS Australia": {
        image: JDS_img,
        link: "",
        opportunities: []
    },

    "Matel Group": {
        image: Mantel_img,
        link: "",
        opportunities: []
    },

    "SecDim": {
        image: SecDim_img,
        link: "",
        opportunities: []
    }

}

export default allCardsInfo