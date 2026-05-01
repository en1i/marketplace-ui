import type { Icon } from '@phosphor-icons/react'
import {
  BasketballIcon,
  BookOpenIcon,
  CookingPotIcon,
  DeviceMobileIcon,
  DiamondIcon,
  GameControllerIcon,
  HouseIcon,
  MusicNoteIcon,
  PaintBrushIcon,
  PawPrintIcon,
  PlantIcon,
  TShirtIcon,
} from '@phosphor-icons/react/dist/ssr'

export type Category = {
  label: string
  Icon: Icon
}

export const categories: Category[] = [
  { label: 'Home & Living', Icon: HouseIcon },
  { label: 'Jewelry', Icon: DiamondIcon },
  { label: 'Fashion', Icon: TShirtIcon },
  { label: 'Art & Collectibles', Icon: PaintBrushIcon },
  { label: 'Electronics', Icon: DeviceMobileIcon },
  { label: 'Garden', Icon: PlantIcon },
  { label: 'Books & Media', Icon: BookOpenIcon },
  { label: 'Toys', Icon: GameControllerIcon },
  { label: 'Music', Icon: MusicNoteIcon },
  { label: 'Pet Supplies', Icon: PawPrintIcon },
  { label: 'Sports', Icon: BasketballIcon },
  { label: 'Kitchen', Icon: CookingPotIcon },
]
