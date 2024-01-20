export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
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
          id: string;
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
