export class ImageConstants {
  private static readonly ASSET_BASE_URL = import.meta.env.VITE_ASSET_BASE_URL;

  public static readonly SESSIONS = {
    DataScienceRoadmap: `${this.ASSET_BASE_URL}/images/sessions/DataScience.png`,
    trpcSession: `${this.ASSET_BASE_URL}/images/sessions/TRPC_JS.png`,
    KubernetesSession: `${this.ASSET_BASE_URL}/images/sessions/GettingStartedK8.png`,
    AWSCertificationRoadmap: `${this.ASSET_BASE_URL}/images/sessions/roadmapAWSCertification.png`,
    GoLang: `${this.ASSET_BASE_URL}/images/sessions/JourneyToGoLang.png`,
  };
}
