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
}
