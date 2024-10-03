export class ImageConstants {
  private static readonly ASSET_BASE_URL = import.meta.env.VITE_ASSET_BASE_URL;

  public static readonly SESSIONS = {
    DataScienceRoadmap: `${this.ASSET_BASE_URL}/images/sessions/DataScience.png`,
  };
}
