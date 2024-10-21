export class ImageConstants {
  private static readonly ASSET_BASE_URL = import.meta.env.VITE_ASSET_BASE_URL;

  public static readonly SESSIONS = {
    DataScienceRoadmap: `${this.ASSET_BASE_URL}/images/sessions/DataScience.png`,
    trpcSession: `${this.ASSET_BASE_URL}/images/sessions/TRPC_JS.png`,
    KubernetesSession: `${this.ASSET_BASE_URL}/images/sessions/GettingStartedK8.png`,
    AWSCertificationRoadmap: `${this.ASSET_BASE_URL}/images/sessions/roadmapAWSCertification.png`,
    GoLang: `${this.ASSET_BASE_URL}/images/sessions/JourneyToGoLang.png`,
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
    1: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-01.png?raw=true`,
    2: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-02.png?raw=true`,
    3: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-03.png?raw=true`,
    4: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-04.png?raw=true`,
    5: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-05.jpg?raw=true`,
    6: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-06.png?raw=true`,
    7: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-07.png?raw=true`,
    8: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-08.png?raw=true`,
    9: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-09.jpg?raw=true`,
    10: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-10.png?raw=true`,
    11: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-11.png?raw=true`,
    13: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-13.png?raw=true`,
    14: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-14.png?raw=true`,
    15: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-15.png?raw=true`,
    16: `${this.ASSET_BASE_URL}/images/feedbacks/feedback-16.png?raw=true`,
  };
}
