import { Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, activities, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: activities.title,
    description: activities.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(activities.title)}`,
    path: activities.path,
  });
}

export default function Activities() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={activities.title}
        description={activities.description}
        path={activities.path}
        image={`/api/og/generate?title=${encodeURIComponent(activities.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${activities.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth gap="l" marginBottom="l">
        <Heading variant="display-strong-xl">{activities.label}</Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak">
          {activities.description}
        </Text>
      </Column>

      {activities.talks.display && (
        <>
          <Heading as="h2" id={activities.talks.title} variant="display-strong-s" marginBottom="m">
            {activities.talks.title}
          </Heading>
          <Column as="ul" fillWidth gap="16" marginBottom="40">
            {activities.talks.items.map((talk, index) => (
              <Column as="li" key={index} fillWidth gap="4">
                <Text variant="heading-strong-l">{talk.title}</Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {talk.event}
                </Text>
              </Column>
            ))}
          </Column>
        </>
      )}

      {activities.research.display && (
        <>
          <Heading
            as="h2"
            id={activities.research.title}
            variant="display-strong-s"
            marginBottom="m"
          >
            {activities.research.title}
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {activities.research.projects.map((project, index) => (
              <Column key={index} fillWidth>
                <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                  <Text variant="heading-strong-l">{project.title}</Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {project.timeframe}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                  {project.role}
                </Text>
                <Column as="ul" gap="16">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <Text as="li" variant="body-default-m" key={achievementIndex}>
                      {achievement}
                    </Text>
                  ))}
                </Column>
              </Column>
            ))}
          </Column>
        </>
      )}

      {activities.publications.display && (
        <>
          <Heading
            as="h2"
            id={activities.publications.title}
            variant="display-strong-s"
            marginBottom="m"
          >
            {activities.publications.title}
          </Heading>
          <Column as="ul" fillWidth gap="16" marginBottom="40">
            {activities.publications.items.map((publication, index) => (
              <Row as="li" key={index} fillWidth horizontal="between" vertical="center">
                <Text variant="heading-strong-l">{publication.title}</Text>
                <Tag size="l">{publication.status}</Tag>
              </Row>
            ))}
          </Column>
        </>
      )}

      {activities.teaching.display && (
        <>
          <Heading
            as="h2"
            id={activities.teaching.title}
            variant="display-strong-s"
            marginBottom="m"
          >
            {activities.teaching.title}
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {activities.teaching.roles.map((role, index) => (
              <Column key={index} fillWidth>
                <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                  <Text variant="heading-strong-l">{role.title}</Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {role.timeframe}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                  {role.organization}
                </Text>
                <Text variant="body-default-m">{role.description}</Text>
              </Column>
            ))}
          </Column>
        </>
      )}

      {activities.volunteering.display && (
        <>
          <Heading
            as="h2"
            id={activities.volunteering.title}
            variant="display-strong-s"
            marginBottom="m"
          >
            {activities.volunteering.title}
          </Heading>
          <Column fillWidth gap="l">
            {activities.volunteering.roles.map((role, index) => (
              <Column key={index} fillWidth>
                <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                  <Text variant="heading-strong-l">{role.organization}</Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {role.timeframe}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                  {role.role}
                </Text>
                <Text variant="body-default-m">{role.description}</Text>
              </Column>
            ))}
          </Column>
        </>
      )}
    </Column>
  );
}
