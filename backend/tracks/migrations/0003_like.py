# Generated by Django 3.0.7 on 2020-07-07 15:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0002_track_posted_by'),
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('track', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='tracks.Track')),
            ],
        ),
    ]
