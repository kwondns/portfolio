import { DefaultColors } from 'tailwindcss/types/generated/colors';

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      back_stack: {
        Row: {
          category: string;
          created_at: string;
          id: number;
          img: string;
          name: string;
          url: string;
        };
        Insert: {
          category: string;
          created_at?: string;
          id?: number;
          img: string;
          name: string;
          url: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          id?: number;
          img?: string;
          name?: string;
          url?: string;
        };
        Relationships: [];
      };
      etc_stack: {
        Row: {
          category: string;
          created_at: string;
          id: number;
          img: string;
          name: string;
          url: string;
        };
        Insert: {
          category: string;
          created_at?: string;
          id?: number;
          img: string;
          name: string;
          url: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          id?: number;
          img?: string;
          name?: string;
          url?: string;
        };
        Relationships: [];
      };
      front_stack: {
        Row: {
          category: string;
          created_at: string;
          id: number;
          img: string;
          name: string;
          url: string;
        };
        Insert: {
          category: string;
          created_at?: string;
          id?: number;
          img: string;
          name: string;
          url: string;
        };
        Update: {
          category?: string;
          created_at?: string;
          id?: number;
          img?: string;
          name?: string;
          url?: string;
        };
        Relationships: [];
      };
      note: {
        Row: {
          created_at: string;
          id: string;
          img: string;
          link: string;
          title: string;
          view: boolean;
        };
        Insert: {
          created_at?: string;
          id?: string;
          img: string;
          link: string;
          title: string;
          view?: boolean;
        };
        Update: {
          created_at?: string;
          id?: string;
          img?: string;
          link?: string;
          title?: string;
          view?: boolean;
        };
        Relationships: [];
      };
      note_tag: {
        Row: {
          color: string;
          created_at: string;
          id: number;
          note_id: string;
          tag: string;
        };
        Insert: {
          color: string;
          created_at?: string;
          id?: number;
          note_id: string;
          tag: string;
        };
        Update: {
          color?: string;
          created_at?: string;
          id?: number;
          note_id?: string;
          tag?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'note_tag_note_id_fkey';
            columns: ['note_id'];
            isOneToOne: false;
            referencedRelation: 'note';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'note_tag_note_id_fkey';
            columns: ['note_id'];
            isOneToOne: false;
            referencedRelation: 'note_with_tag';
            referencedColumns: ['id'];
          },
        ];
      };
      project: {
        Row: {
          created_at: string;
          date: string;
          db: string;
          id: string;
          preview_image: string;
          shorten_content: string;
          title: string;
          visible: boolean;
        };
        Insert: {
          created_at?: string;
          date: string;
          db: string;
          id?: string;
          preview_image: string;
          shorten_content: string;
          title: string;
          visible: boolean;
        };
        Update: {
          created_at?: string;
          date?: string;
          db?: string;
          id?: string;
          preview_image?: string;
          shorten_content?: string;
          title?: string;
          visible?: boolean;
        };
        Relationships: [];
      };
      project_back_tag: {
        Row: {
          back_tag: string;
          id: number;
          project_id: string;
        };
        Insert: {
          back_tag: string;
          id: number;
          project_id: string;
        };
        Update: {
          back_tag?: string;
          id?: number;
          project_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_back_tag_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'project_back_tag_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project_tag';
            referencedColumns: ['id'];
          },
        ];
      };
      project_detail: {
        Row: {
          content: string;
          created_at: string;
          id: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          id: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_detail_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'project_detail_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'project_tag';
            referencedColumns: ['id'];
          },
        ];
      };
      project_front_tag: {
        Row: {
          front_tag: string;
          id: number;
          project_id: string;
        };
        Insert: {
          front_tag: string;
          id: number;
          project_id: string;
        };
        Update: {
          front_tag?: string;
          id?: number;
          project_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_front_tag_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'project_front_tag_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'project_tag';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      back_stack_by_category: {
        Row: {
          category: string;
          img: string[];
          name: string[];
          url: string[];
        };
        Relationships: [];
      };
      etc_stack_by_category: {
        Row: {
          category: string;
          img: string[];
          name: string[];
          url: string[];
        };
        Relationships: [];
      };
      front_stack_by_category: {
        Row: {
          category: string;
          img: string[];
          name: string[];
          url: string[];
        };
        Relationships: [];
      };
      note_tag_type: {
        Row: {
          color: keyof DefaultColors;
          tag: string;
        };
        Relationships: [];
      };
      note_with_tag: {
        Row: {
          created_at: string;
          id: string;
          img: string;
          link: string;
          tags: string[];
          tags_color: string[];
          title: string;
          view: boolean;
        };
        Relationships: [];
      };
      project_tag: {
        Row: {
          back_tag: string[];
          created_at: string;
          date: string;
          db: string;
          front_tag: string[];
          id: string;
          preview_image: string;
          shorten_content: string;
          title: string;
          visible: boolean;
        };
        Relationships: [];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey';
            columns: ['bucket_id'];
            isOneToOne: false;
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] & Database['public']['Views'])
    ? (Database['public']['Tables'] & Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;
