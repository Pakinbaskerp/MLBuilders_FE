import { ImageModel } from "../../../core/models/image.model";

export interface TestimonialModel {
  image: ImageModel;
  quote: string;
  name: string;
  role: string;
  location?: string;
  rating?: number;
}
