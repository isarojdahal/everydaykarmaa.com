export class ImageConstants {
  private static readonly ASSET_BASE_URL = import.meta.env.VITE_ASSET_BASE_URL;

  public static readonly SESSIONS = {
    2025: {
      Journey_to_Microsoft: `${this.ASSET_BASE_URL}/images/sessions/flyers/Journey_to_Microsoft.png`,
      Senior_Software_Engineer: `${this.ASSET_BASE_URL}/images/sessions/flyers/Senior_Software_Engineer.png`,
    },
    2024: {
      Web_3: `${this.ASSET_BASE_URL}/images/sessions/flyers/Web_3.0.png`,
      Flutter_And_Freelance: `${this.ASSET_BASE_URL}/images/sessions/flyers/Flutter_And_Freelance.png`,
      INTERNSHIP_APPLE: `${this.ASSET_BASE_URL}/images/sessions/flyers/Internship_Experience_Apple.png`,
      CTF: `${this.ASSET_BASE_URL}/images/sessions/flyers/Capture_The_Flag.png`,
      WebSecurity: `${this.ASSET_BASE_URL}/images/sessions/flyers/Web_App_Security.png`,
      LearnLaravel: `${this.ASSET_BASE_URL}/images/sessions/flyers/Learn_Laravel.png`,
      ExploringRust: `${this.ASSET_BASE_URL}/images/sessions/flyers/Exploring_Rust_Abhiyan_Dhakal.png`,
      DevOpsRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/DevOpsRoadmap.png`,
      AIMLRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/AIML_Roadmap.png`,
      DataScienceRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/DataScience.png`,
      trpcSession: `${this.ASSET_BASE_URL}/images/sessions/flyers/TRPC_JS.png`,
      KubernetesSession: `${this.ASSET_BASE_URL}/images/sessions/flyers/GettingStartedK8.png`,
      AWSCertificationRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/roadmapAWSCertification.png`,
      GoLang: `${this.ASSET_BASE_URL}/images/sessions/flyers/JourneyToGoLang.png`,
    },
  };

  public static readonly SESSIONS_SCREENSHOTS = {
    2025: {},
    2024: {
      Web_3: [
        `${this.ASSET_BASE_URL}/images/sessions-screenshots/Web_3.0/1.webp`,
        `${this.ASSET_BASE_URL}/images/sessions-screenshots/Web_3.0/2.webp`,
      ],
      Flutter_And_Freelance: [
        `${this.ASSET_BASE_URL}/images/sessions-screenshots/Flutter_And_Freelance/1.webp`,
      ],
      INTERNSHIP_APPLE: [
        `${this.ASSET_BASE_URL}/images/sessions-screenshots/Internship_Experience_Apple/1.webp`,
      ],
    },
  };

  public static readonly HERO_BG = `${this.ASSET_BASE_URL}/images/hero/hero-bg.jpg`;

  public static readonly FEEDBACKS = {
    1: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-01.png`,
    2: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-02.png`,
    3: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-03.png`,
    4: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-04.png`,
    5: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-05.png`,
    6: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-06.png`,
    7: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-07.png`,
    8: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-08.png`,
    9: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-09.jpg`,
    10: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-10.png`,
    11: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-11.png`,
    13: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-13.png`,
    14: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-14.png`,
    15: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-15.png`,
    16: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-16.png`,
    17: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-17.png`,
    18: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-18.png`,
    19: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-19.png`,
    20: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-20.png`,
    21: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-21.png`,
  };

  public static readonly PARTNERS = {
    Gracathon2081: `${this.ASSET_BASE_URL}/images/partners/gracathon-2081.png`,
    SoftwareFreedomDay2024: `${this.ASSET_BASE_URL}/images/partners/software-freedom-day-2024.png`,
    drcfs: `${this.ASSET_BASE_URL}/images/partners/DRCFS-2023.jpg`,
  };
}
