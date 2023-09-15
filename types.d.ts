type ModalProps = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

type UseStoreModal = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type DashboardProps = {
  children: React.ReactNode;
  params: { storeId: string };
};

type SettingsPageProps = {
  params: {
    storeId: string;
  };
};

type HeadingProps = {
  title: string;
  description: string;
};

type AlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
};

type APIAlertProps = {
  title: string;
  description: string;
  variant: "Public" | "Admin";
};

type ImageUploadProps = {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
};

type APIListProps = {
  entityName: string;
  entityIdName: string;
};
