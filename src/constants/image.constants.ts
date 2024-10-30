export class ImageConstants {
  private static readonly ASSET_BASE_URL = import.meta.env.VITE_ASSET_BASE_URL;

  public static readonly SESSIONS = {
    2025: {},
    2024: {
      DevOpsRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/DevOpsRoadmap.png`,
      AIMLRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/AIML Roadmap.png`,
      DataScienceRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/DataScience.png`,
      trpcSession: `${this.ASSET_BASE_URL}/images/sessions/flyers/TRPC_JS.png`,
      KubernetesSession: `${this.ASSET_BASE_URL}/images/sessions/flyers/GettingStartedK8.png`,
      AWSCertificationRoadmap: `${this.ASSET_BASE_URL}/images/sessions/flyers/roadmapAWSCertification.png`,
      GoLang: `${this.ASSET_BASE_URL}/images/sessions/flyers/JourneyToGoLang.png`,
    },
  };

  public static readonly HERO_BG = `${this.ASSET_BASE_URL}/images/hero/hero-bg.jpg`;

  public static readonly TECH_LOGOS = {
    HTML: `${this.ASSET_BASE_URL}/images/tech-logos/html.png`,
    CSS: `${this.ASSET_BASE_URL}/images/tech-logos/css.png`,
    JavaScript: `${this.ASSET_BASE_URL}/images/tech-logos/javascript.png`,
    React: `${this.ASSET_BASE_URL}/images/tech-logos/react.png`,
    SQL: `${this.ASSET_BASE_URL}/images/tech-logos/sql.png`,
    Docker: `${this.ASSET_BASE_URL}/images/tech-logos/docker.png`,
  };

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
  };

  public static readonly PARTNERS = {
    Gracathon2081: `${this.ASSET_BASE_URL}/images/partners/gracathon-2081.png`,
    SoftwareFreedomDay2024: `${this.ASSET_BASE_URL}/images/partners/software-freedom-day-2024.png`,
    drcfs: `${this.ASSET_BASE_URL}/images/partners/DRCFS 2023 March 09.jpg`,
  };
}
